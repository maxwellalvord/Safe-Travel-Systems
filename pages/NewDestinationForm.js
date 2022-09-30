import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewDestinationForm(props){

  function handleNewDestinationFormSubmission(event) {
    event.preventDefault();
    props.onNewDestinationCreation({
      City: event.target.City.value, 
      Date: event.target.Date.value, 
      id: v4()
    });
  }

  // function handleNewDestinationApiCall(event) {
  //   event.preventDefault();
  //   props.onNewDestinationCreation({
  //     City: event.target.City.value, 
  //     Date: event.target.Date.value, 
  //     id: v4()
  //   });
  // }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewDestinationFormSubmission}
        buttonText="Add Destination!" />
    </React.Fragment>
  );
}

NewDestinationForm.propTypes = {
  onNewDestinationCreation: PropTypes.func
};

export default NewDestinationForm;