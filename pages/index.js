// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import React from 'react';
import NewDestinationForm from '../components/NewDestinationForm';
import DestinationList from '../components/DestinationList';
// import EditDestinationForm from './editDestinationForm';
import DestinationDetail from '../components/DestinationDetail';
// import weatherApi from './weatherApi';
import MainPage from '../components/MainPage';
import styled from 'styled-components';
import { db, auth } from '../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const CenterMain = styled.button`
display: flex;
justify-content: center;
text-align: center;
color: #5c8c9c;
padding: 7px;
margin: auto;
background-color: #5c8c9c;
border-radius: 10px;
margin-top: 4%;
width: 400px;
`;

export default function Home() {

  let currentlyVisibleState = null;
  let buttonText = null;
  let errorText = null;

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDestinationList, setMainDestinationList] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null); 
  // const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [topCity, setCity] = useState([]);


  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "destinations"), 
      (collectionSnapshot) => {
        const destinations = [];
        collectionSnapshot.forEach((doc) => {
            destinations.push({
              ... doc.data(),
              id: doc.id
            });
        });
        setMainDestinationList(destinations);
      }, 
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);


  // useEffect(() => {
  //   (async function runEffect() {
  //   const Api = await weatherApi()
  //     console.log(Api)
  //       .then (data => {
  //       console.log(data)
  //     })
  //   })();   
  // }, [selectedDestination])
  
  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=portland&appid=${process.env.NEXT_PUBLIC_KEY}`)
  //   .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`${response.status}: ${response.statusText}`);
  //       } else {
  //         return response.json();
  //       }
  //     })
  //   .then((jsonifiedResponse) => {
  //       setCity(jsonifiedResponse.results)
  //       setIsLoaded(true)
  //       console.log(topCity.coord)
  //     })
  //     .catch((error) => {
  //       setError(error)
  //       setIsLoaded(true)
  //     });
  //   }, [selectedDestination])


  const handleClick = () => {
    if (selectedDestination != null) {
      setFormVisibleOnPage(false);
      setSelectedDestination(null);
      // setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingDestination = async (id) => {
    await deleteDoc(doc(db, "destinations", id));
    setSelectedDestination(null);
  } 
  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingDestinationInList = async (destinationToEdit) => {
    await updateDoc(doc(db, "destinations", destinationToEdit.id), destinationToEdit);
    setEditing(false);
    setSelectedDestination(null);
  }
  const handleAddingNewDestinationToList = async (newDestinationData) => {
    await addDoc(collection(db, "destinations"), newDestinationData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedDestination = (id) => {
    const selection = mainDestinationList.filter(destination => destination.id === id)[0];
    setSelectedDestination(selection);
  }

  // if (editing == true){
  //   currentlyVisibleState = <EditDestinationForm
  //   destination = {selectedDestination}
  //   onEditDestination ={handleEditingDestinationInList}
  //   />;
  //   buttonText = 'Return to Destination List';


  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the Safe Travel Systems.</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (selectedDestination != null) {
    currentlyVisibleState = <DestinationDetail
    destination = {selectedDestination}
    onClickingDelete = {handleDeletingDestination}
    OnClickingEdit = {handleEditClick}
    />;
    buttonText = 'Return to Destination List';
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewDestinationForm
    onNewDestinationCreation = {handleAddingNewDestinationToList}
    // onNewDestinationApiCreation = {handleAddingNewDestinationToApi}
    />
    buttonText = 'Return to Destination List';
  } else if (mainDestinationList.length == 0 ){
    currentlyVisibleState = <MainPage
    // onDestinationSelection = {handleChangingSelectedDestination}
    // destinationList = {mainDestinationList}
    /> 
    buttonText = 'Add Destination'; 
  } else {
    currentlyVisibleState = <DestinationList
    onDestinationSelection = {handleChangingSelectedDestination}
    destinationList = {mainDestinationList}
    /> 
    buttonText = 'Add Destination'; 
  }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* {errorText ? !null : errorText + <p> Their has been an error with your destination selection, make sure you have the correct information</p>} */}
        <CenterMain>
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
        </CenterMain>
      </React.Fragment>
    );
  }
}
