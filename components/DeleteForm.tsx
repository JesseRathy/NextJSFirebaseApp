import { Button, Typography } from "@mui/material"
import React from "react"
import { deleteBooking  } from "@/libs/firebase"
import {useRouter} from 'next/navigation'

export default function DeleteForm(props: {deleteOpen: boolean, handleDeleteClose: () => void, id:string,} ) {
    const router = useRouter();

    async function handleSubmit (e: React.SyntheticEvent): Promise<void> {   
        e.preventDefault();
        console.log(`Attempting to delete ${props.id}`)
        let result = await deleteBooking(props.id);
        console.log(`Attempting to refresh ${props.id}`)
        props.handleDeleteClose();
        console.log(`Complete`);
        await router.refresh();
    }
    console.log(props.deleteOpen);
    console.log(props.id);

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
                <Button variant="contained" color="secondary" onClick={props.handleDeleteClose}>Cancel</Button>
            </div>

        </form>
    )

}