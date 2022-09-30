// import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import NewDestinationForm from './newDestinationForm';
import DestinationList from './destinationList';
// import EditDestinationForm from './EditDestinationForm';
import DestinationDetail from './destinationDetail';


const Head = styled.a`
color: #5c8c9c;
`;

export default function Home() {

  let currentlyVisibleState = null;
  let buttonText = null;
  let errorText = null;
  
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDestinationList, setMainDestinationList] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null); 
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedDestination.City}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        // We create an action and then dispatch it.
        const action = getTopStoriesSuccess(jsonifiedResponse.results)
        dispatch(action);
      })
      .catch((error) => {
        // We create an action and then dispatch it. 
        return errorText = error;
      });
    }, [handleAddingNewDestinationToList])
  
  const handleClick = () => {
    if (selectedDestination != null) {
      setFormVisibleOnPage(false);
      setSelectedDestination(null);
      setEditing(false);
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

 

  if (editing){
    currentlyVisibleState = <EditDestinationForm
    destination = {selectedDestination}
    onEditDestination ={handleEditingDestinationInList}
    />;
    buttonText = 'Return to Destination List';
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
  } else {
    currentlyVisibleState = <DestinationList
    onDestinationSelection = {handleChangingSelectedDestination}
    destinationList = {mainDestinationList}
    /> 
    buttonText = 'Add Destination'; 
  }

  return (
    <React.Fragment>
      <Head>
      {currentlyVisibleState}
      {error ? !null : errorText + <p> Their has been an error with your destination selection, make sure you have the correct information</p>}
      {error ? null :<button onClick={handleClick}>{buttonText}</button>}
      </Head>
    </React.Fragment>
    
  );
}
