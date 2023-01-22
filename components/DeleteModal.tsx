import { BookingInfo } from "@/types/types";
import { Dialog, Typography } from "@mui/material";
import { useState } from "react";
import DeleteForm from "./DeleteForm";

interface editModalProps {
    deleteOpen: boolean,
    deleteHandleClose: () => void
    id: string
    //refresh: () => void
}

export default function DeleteModal({ deleteOpen, deleteHandleClose, id }: editModalProps) {



    //console.log(`this is the data: ${JSON.stringify(data)}`)
    // const headers = getHeaders(data);
    return (

        <Dialog open={deleteOpen} onClose={deleteHandleClose}>
            <DeleteForm deleteOpen={deleteOpen} handleDeleteClose={deleteHandleClose} id={id} ></DeleteForm>
        </Dialog>

    )

}
