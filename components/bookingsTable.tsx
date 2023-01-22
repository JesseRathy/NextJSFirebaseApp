import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
import React from "react";
import { getHeaders } from "../libs/helper"
import { BookingInfo } from "@/types/types";
import UpdateButton from "./updateButton";
import { PropaneSharp } from "@mui/icons-material";
import DeleteButton from "./deleteButton";



type TableProps = {
    data: BookingInfo[]
}



export default function MuiBookingTable({ data }: TableProps) {
    console.log(`this is the data: ${JSON.stringify(data)}`)
    // const headers = getHeaders(data);
    return(
     <TableContainer component={Paper}>
            <Table aria-label='table-of-bookings'>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Id
                        </TableCell>
                        <TableCell>
                            Booking Seeker
                        </TableCell>
                        <TableCell>
                            Booking Giver
                        </TableCell>
                        <TableCell>
                            Booking Date
                        </TableCell>
                        <TableCell>
                            Total Amount
                        </TableCell>
                        <TableCell>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody> 
                {data.map((row: BookingInfo) => (
                     <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.seeker}</TableCell>
                        <TableCell>{row.giver}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.totalAmount}</TableCell>
                        <TableCell>
                            <UpdateButton row={row} >Edit</UpdateButton>
                            <DeleteButton row={row}>Delete</DeleteButton>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        )
    }
    
