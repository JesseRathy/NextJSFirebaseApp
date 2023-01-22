import { Button } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import ModalForm from "./ModalForm";
import UpdateModal from "./UpdateModal";
import { BookingInfo } from "@/types/types";
import { Props } from "next/script";
import DeleteModal from "./DeleteModal";

export interface ButtonProps extends PropsWithChildren {
    row: BookingInfo
}




export default function DeleteButton({row}:ButtonProps) {

    const [open, setOpen] = useState(false);
    
    
    const handleOpen = () => {
        setOpen(true);
        console.log(open);

    }

    const handleClose = () => {
        setOpen(false);
        console.log(open);
    }

    console.log(open)
    return(
        
    <div> 
    <Button 
        variant="contained" 
        color="primary"
        onClick={handleOpen}>
        Delete
        </Button>
    <DeleteModal open={open} handleClose={handleClose} id={row.id} ></DeleteModal>
    </div>
   

);
}