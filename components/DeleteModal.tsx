import { BookingInfo } from "@/types/types";
import { Dialog, Typography } from "@mui/material";
import { useState } from "react";
import DeleteForm from "./DeleteForm";
import ModalForm from "./ModalForm";

interface editModalProps {
 open: boolean,
 handleClose: () => void
 id: string
}

export default function DeleteModal({open,handleClose,id}: editModalProps) {

    
    
    //console.log(`this is the data: ${JSON.stringify(data)}`)
    // const headers = getHeaders(data);
    return(
    
    <Dialog open={open} onClose={handleClose}>
       <DeleteForm open={open} handleClose={handleClose} id={id}></DeleteForm>
    </Dialog>
  
    )
       
}
