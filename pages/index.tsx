import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Loader from '../components/Loader'
import { getAllBookings } from '@/libs/firebase';
import MuiBookingTable from '@/components/bookingsTable';
import { changeDate } from '@/libs/helper';
import { BookingInfo, BookingProps } from '@/types/types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import CreateButton from '@/components/createButton';

export const getServerSideProps: GetServerSideProps = async (context) => {
  let Bookings: BookingInfo[] = []
  console.log("fetching Bookings")
    let bookingInfo = await getAllBookings()
  
    if (bookingInfo) {
      for (let doc of bookingInfo) {
        console.log(JSON.stringify(doc))

        let BookingObject: BookingInfo = {
          id: doc.docid,
          seeker: doc.data.seeker,
          giver: doc.data.giver,
          date: changeDate(doc.data.date.toDate()),
          totalAmount: doc.data["total amount"]
        }
        Bookings.push(BookingObject)
      }

    } else {
      Bookings =  [];
    }
    
    return {
      props: {Bookings}
    }
}





export default function Home({Bookings}: BookingProps) {
  const [isRefreshing, setisRefreshing] = React.useState<boolean>(false)
  
  //console.log("have fetched");
  console.log(`Here are the bookings ${JSON.stringify(Bookings)}`);




  return (

    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the List of bookings! Here is a table of the current bookings.
        </Typography>
        <Loader show />
        <CreateButton text={"Create new Booking"}></CreateButton>
        <MuiBookingTable data={Bookings} ></MuiBookingTable>

      </Box>
    </Container>
  );
}