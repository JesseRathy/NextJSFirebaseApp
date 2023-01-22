import { Button } from "@mui/material";
import { useState } from "react";
import ModalForm from "./ModalForm";
import UpdateModal from "./UpdateModal";

export interface ButtonProps {
    text: string
}




export default function CreateButton({text}:ButtonProps) {

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
        {text}
        </Button>
    <UpdateModal open={open} handleClose={handleClose} data={null} ></UpdateModal></div>
   

);
}