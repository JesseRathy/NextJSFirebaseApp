import { Button } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import ModalForm from "./ModalForm";
import UpdateModal from "./UpdateModal";
import { BookingInfo } from "@/types/types";

export interface ButtonProps {
    row: BookingInfo,
    children: React.ReactNode;
    //refresh: () => void
}




export default function UpdateButton({row,children}:ButtonProps) {

    const [open, setOpen] = useState(false);
    
    
    const handleOpen = () => {
        setOpen(true);
        console.log(`HandleOpen() --> ${open}`);

    }

    const handleClose = () => {
        setOpen(false);
        console.log(`HandleClose() --> ${open}`);
    }

    return(
        
    <div> 
    <Button 
        variant="contained" 
        color="primary"
        onClick={handleOpen}>
        Edit Booking
        </Button>
    <UpdateModal open={open} handleClose={handleClose} data={row} ></UpdateModal></div>
   

);
}