// import styles from '../styles/Home.module.css'
import Header from './header';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Head = styled.a`
color: #5c8c9c;
`;

export default function Home() {
  
  const [formVisableOnPage, setFormVisableOnPage] = useState(false); 
  
  let currentlyVisibleState = null;

  if (editing){
    currentlyVisibleState = <EditDestinationForm
    destination = {selectedDestination}
    onEditDestination ={handleEditingDestinationList}
    />;
  }
  else if (selectedDestination != null) {
    currentlyVisibleState = <DestinationDetail
    destination = {selectedDestination}
    onClickingDelete = {handleDeletingDestination}
    OnClickingEdit = {handleEditingDestination}
    />;
  } else if (formVisableOnPage) {
    currentlyVisibleState = <newDestinationForm
    onNewDestinationCreation = {handleChangingSelectedDestination}
    />;
  }


  return (
    <>
      <Head>
      <Header></Header>
      </Head>
    </>
  )
}
