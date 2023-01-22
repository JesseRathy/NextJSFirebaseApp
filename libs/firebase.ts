import firebase, { initializeApp } from 'firebase/app'
import {getAuth, Auth} from 'firebase/auth'
import {addDoc, collection, deleteDoc, doc, DocumentData, Firestore, getDocs, getFirestore, QueryDocumentSnapshot, QuerySnapshot, setDoc, updateDoc} from 'firebase/firestore'
import {getStorage,FirebaseStorage} from'firebase/storage'
import { BookingInfo,CreateInfo, UpdateInfo } from '@/types/types'
import { changeDate } from './helper'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: firebase.FirebaseOptions = {
    apiKey: "AIzaSyAotrhSMnF-6najtocF8Lq53wYwypqSl_0",
    authDomain: "nextjswebapp-2330c.firebaseapp.com",
    projectId: "nextjswebapp-2330c",
    storageBucket: "nextjswebapp-2330c.appspot.com",
    messagingSenderId: "5484481258",
    appId: "1:5484481258:web:edec58db4ef7911b2aa593",
    measurementId: "G-DYYKNCJD36"
  };

 const app: firebase.FirebaseApp = initializeApp(firebaseConfig);
 const db: Firestore = getFirestore(app);
 const auth: Auth  = getAuth(app);
 const storage: FirebaseStorage = getStorage(app);

 export async function getAllBookings(): Promise<DocumentData[]>{
  try {

  const tableRef = collection(db,"bookings")
  const bookings = await getDocs(tableRef);
  if (bookings.size > 0){
     let items: DocumentData[] =  bookings.docs.map((doc)=> ({ docid: doc.id, data: doc.data()})) 
     return items;
  } 

  return []
  } catch (error) {
      let message: string
      if (error instanceof Error) {
        message = error.message
      } else {
        message = String(error)
      }
      console.log(message);
      throw(error)
  }

 }

 export async function createNewBooking(data: CreateInfo){
      const result = await addDoc(collection(db,"bookings"),data);
      console.log("Document written with ID: ", result.id);
 }

 export async function updateBooking(data: UpdateInfo){
    let updateData =
    {
      seeker: data.seeker,
      giver: data.giver,
      date: data.date,
      "total amount": data["total amount"]
    }
   
    const result = await updateDoc(doc(db,"bookings",data.id),updateData)
    console.log("Document updated with ID: ", data.id);
 }

 export async function deleteBooking(id: string){
    const deleteRef = doc(db,"bookings",id)
    await deleteDoc(deleteRef);
    console.log(`document ${id} has been deleted`);
 }
