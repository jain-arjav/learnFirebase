//import { useEffect, useState } from 'react';
import './App.css'
import Auth from './components/auth'
// import { db } from "./config/firebase";
// import {getDocs, collection} from 'firebase/firestore'




function App() {

  // const [MovieList, setMovieList] = useState([])
  // const movieCollectionRef = collection(db, 'movies')
  //useEffect(() => {
  //   const getMovieList = async () => {
  //     try {
  //       const data = await getDocs(movieCollectionRef)
  //       const filteredData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,

  //       }))
  //       setMovieList(filteredData)
  //       // why it is not working?
  //       // It is because getDocs returns a querySnapshot object. data is stored in the docs property of the querySnapshot object.

  //     }
  //     catch (err) {
  //       console.error(err)
  //     }
      

  //     getMovieList();
  // }
  // }, )
  
  return (
   <>
      <h1>Firebase</h1>
      
      <Auth />
      
   </>
  )
}

export default App;
