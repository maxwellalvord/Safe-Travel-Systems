import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewDestinationForm(props){

  function handleNewDestinationFormSubmission(event) {
    event.preventDefault();
    props.onNewDestinationCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewDestinationFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewDestinationForm.propTypes = {
  onNewDestinationCreation: PropTypes.func
};

export default NewDestinationForm;