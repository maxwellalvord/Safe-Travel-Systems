import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="formBackground">
        <form className="form" onSubmit={props.formSubmissionHandler}>
          <input 
            className="inputCity"
            type='text'
            name='City'
            placeholder='Sicily' />
          <br></br>
          <input
            className="inputDate"
            type='date'
            name='Date'/>
          <br></br>
          <input
            className="inputInfo"
            type="textarea"
            name="Info"
            placeholder="Describe your visit"/>
          <br></br>
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;