import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./reusableForm";

export default function NewDestinationForm(props){

  function handleNewDestinationFormSubmission(event) {
    event.preventDefault();
    props.onNewDestinationCreation({
      City: event.target.City.value, 
      Date: event.target.Date.value,
      Info: event.target.Info.value,
      // id: v4()
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
      <div className="formTitle">
        <h1>Enter a City you are visiting then enter the date you are going!</h1>
      </div>
      <ReusableForm 
        formSubmissionHandler={handleNewDestinationFormSubmission}
        buttonText="Add Destination!" />
    </React.Fragment>
  );
}

NewDestinationForm.propTypes = {
  onNewDestinationCreation: PropTypes.func
};
