import { Button, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import NumberFormat from "react-number-format"
import React, { useState } from "react"
import { Timestamp } from "firebase/firestore"
import { createNewBooking, updateBooking } from "@/libs/firebase"
import { BookingInfo } from "@/types/types"
import {useRouter} from 'next/navigation'


type FormProps = {
    handleClose: () => void
}

export default function ModalForm(props: {open: boolean, handleClose: () => void, data:BookingInfo| null} ) {
    const [dateVal, setDateVal] = useState<Date | null> (props.data == null ? null : new Date(props.data.date))
    const [seekerVal, setSeekerVal] = useState<string | null> (props.data == null ? null : props.data.seeker)
    const [giverVal, setGiverVal] = useState<string | null> (props.data == null ? null : props.data.giver)
    const [costVal, setCostVal] = useState<string | null>  (props.data == null ? null : props.data.totalAmount.toString())
    const [typeVal, setTypeVal] = useState<string> (props.data ==null ? "Create" : "Update")

    const router = useRouter()

    async function handleSubmit (e: React.SyntheticEvent): Promise<void> {
        e.preventDefault();
        let finalDate = dateVal == null ? null : Timestamp.fromDate(dateVal)
        let finalCost = costVal == null ? null : Number(costVal)
        console.log(`Values: ${seekerVal}, ${giverVal}, ${dateVal}, ${costVal}`);

        if (typeVal === "Create"){
            const data = {
                seeker: seekerVal,
                giver: giverVal,
                date: finalDate,
                ["total amount"]: finalCost
            }
            await createNewBooking(data)
        } else if (typeVal === "Update" && props.data != null) {
            const updateData = {
                id: props.data.id,
                seeker: seekerVal,
                giver: giverVal,
                date: finalDate,
                ["total amount"]: finalCost
            }
            await updateBooking(updateData)
        }
        await router.refresh()
        props.handleClose();
        

    }

    console.log(dateVal);
    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
        }}>
            <TextField label="Booking Seeker" variant="filled" required value={seekerVal} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSeekerVal(e.target.value)}></TextField>
            <TextField label="Booking Giver" variant="filled" required value={giverVal} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setGiverVal(e.target.value)}></TextField>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker label="Booking Date" value={dateVal} renderInput={(params) => <TextField {...params} />} onChange={(newValue) => { setDateVal(newValue) }}></DatePicker>
            </LocalizationProvider>
            <TextField label="Total Amount" variant="filled" type="number" required  value={costVal} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCostVal(e.target.value)} ></TextField>
            <div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
                <Button variant="contained" color="secondary" onClick={props.handleClose}>Cancel</Button>
            </div>

        </form>
    )

}