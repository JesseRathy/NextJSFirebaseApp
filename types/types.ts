import { Timestamp } from "firebase/firestore"

export type BookingInfo = {
    id: string,
    seeker: string,
    giver: string,
    date: string,
    totalAmount: number
}

export interface BookingProps {
    Bookings: BookingInfo[]
}

export interface CreateInfo {
    seeker: string|null,
    giver: string|null,
    date: Timestamp|null,
    ["total amount"]: number|null
}

export interface UpdateInfo {
    id: string
    seeker: string|null,
    giver: string|null,
    date: Timestamp|null,
    ["total amount"]: number|null
}