import { CircularProgress } from "@mui/material";
import React from "react";

type LoaderProps ={
    show: boolean
}

export default function Loader ({show}: LoaderProps ) {
    return show === true ? <CircularProgress color="secondary" /> : null
}

