import { Button, TextField, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import NumberFormat from "react-number-format"
import React, { useState } from "react"
import { propsToClassKey } from "@mui/styles"
import { Timestamp } from "firebase/firestore"
import { createNewBooking, deleteBooking, updateBooking } from "@/libs/firebase"
import { BookingInfo } from "@/types/types"


type FormProps = {
    handleClose: () => void
}

export default function ModalForm(props: {open: boolean, handleClose: () => void, id:string} ) {

    async function handleSubmit (e: React.SyntheticEvent): Promise<void> {
        
        let result = await deleteBooking(props.id)
        props.handleClose();

    }

    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
        }}>
            <Typography variant="h5" component="h5">
                Are you sure you want to delete this item?          
            </Typography>
            <Typography variant="body1" component="body">
            Once you delete it you cannot recover it!
            </Typography>
            <div>
                <Button variant="contained" color="primary" type="submit">Delete</Button>
                <Button variant="contained" color="secondary" onClick={props.handleClose}>Cancel</Button>
            </div>

        </form>
    )

}