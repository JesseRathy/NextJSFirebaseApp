import { BookingInfo } from "@/types/types";
import { Dialog, Typography } from "@mui/material";
import { useState } from "react";
import ModalForm from "./ModalForm";

interface editModalProps {
 open: boolean,
 handleClose: () => void
 data: BookingInfo | null
// refresh: () => void
}

export default function UpdateModal({open,handleClose,data}: editModalProps) {

    
    
    //console.log(`this is the data: ${JSON.stringify(data)}`)
    // const headers = getHeaders(data);
    return(
    
    <Dialog open={open} onClose={handleClose}>
       <ModalForm open={open} handleClose={handleClose} data={data} ></ModalForm>
    </Dialog>
  
    )
       
}


