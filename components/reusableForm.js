import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Center = styled.button`
display: flex;
justify-content: center;
text-align: center;
color: #FFFBC8;
padding: 7px;
margin: auto;
background-color: #6495ED;
border-radius: 10px;
margin-top: 9%;
`;


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
          <Center>
          <button className="btn btn-blue" type='submit'>{props.buttonText}</button>
          </Center>
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