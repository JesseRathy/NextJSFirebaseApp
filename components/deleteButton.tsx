import { Button } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import ModalForm from "./ModalForm";
import UpdateModal from "./UpdateModal";
import { BookingInfo } from "@/types/types";
import DeleteModal from "./DeleteModal";

export interface ButtonProps {
    row: BookingInfo
    //refresh: () => void
}




export default function DeleteButton({row}:ButtonProps) {

    const [deleteopen, setDeleteOpen] = useState(false);
    
    
    const handleDeleteOpen = () => {
        setDeleteOpen(true);
        console.log(`HandleDeleteOpen() --> ${deleteopen}`);
        console.log(deleteopen);

    }

    const handleDeleteClose = () => {
        setDeleteOpen(false);
        console.log(`HandleDeleteClosed() --> ${deleteopen}`);
        console.log(deleteopen);
    }

    return(
        
    <div> 
    <Button 
        variant="contained" 
        color="primary"
        onClick={handleDeleteOpen}>
        Delete
        </Button>
    <DeleteModal deleteOpen={deleteopen} deleteHandleClose={handleDeleteClose} id={row.id}  ></DeleteModal>
    </div>
   

);
}