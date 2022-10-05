// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import React from 'react';
import NewDestinationForm from './NewDestinationForm';
import DestinationList from './destinationList';
// import EditDestinationForm from './editDestinationForm';
import DestinationDetail from './destinationDetail';
// import weatherApi from './weatherApi';
import MainPage from './MainPage';
import styled from 'styled-components';

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
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [topCity, setCity] = useState([]);



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

  const handleDeletingDestination = (id) => {
    const newMainDestinationList = mainDestinationList.filter(destination => destination.id !== id);
    setMainDestinationList(newMainDestinationList);
    setSelectedDestination(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingDestinationInList = (destinationToEdit) => {
    const editedMainDestinationList = mainDestinationList
    .filter(destination => destination.id !== selectedDestination.id)
    .concat(destinationToEdit);
    setMainDestinationList(editedMainDestinationList);
    setEditing(false);
    setSelectedDestination(null);
  }

  const handleAddingNewDestinationToList = (newDestination) => {
    const newMainDestinationList = mainDestinationList.concat(newDestination);
    setMainDestinationList(newMainDestinationList);
    
    setFormVisibleOnPage(false)
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
  if (selectedDestination != null) {
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
      {errorText ? null :<button onClick={handleClick}>{buttonText}</button>}
      </CenterMain>
    </React.Fragment>
    
  );
}
