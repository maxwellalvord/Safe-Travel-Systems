import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Ticket(props){

  const Individual = styled.div`
  background-color: #f5b700;
  width: 300px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #fffbc8;
  text-align: center;
  border-radius: 10px;
  `;

  const H3 = styled.h3`
  font-size: 22px;
  color: #FFFBC8;
  `

  return (
    
    <React.Fragment>
      <Individual>
      <div onClick = {() => props.whenDestinationClicked(props.id)}>
        <H3>{props.Date} - {props.City}</H3>
      </div>
      </Individual>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  City: PropTypes.string,
  Date: PropTypes.date,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
}

export default Ticket;