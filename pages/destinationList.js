import React from 'react';
import Destination from './destination';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function DestinationList(props){

  const Dest = styled.ul`
    background-color: #F8D86E;
    width: 1230px;
    margin: auto;
    margin-top: 1px;
    border: 2px solid #FFFBC8;
    padding: 25px;
    border-radius: 10px;
  `;

  return (
    
    <React.Fragment>
    
      <Dest>
      {props.destinationList.map((destination) =>
        <Destination 
          whenDestinationClicked={props.onDestinationSelection}
          City={destination.City}
          Date={destination.Date}
          id={destination.id}
          key={destination.id}/>
      )}
      </Dest>
    </React.Fragment>
  );
}

DestinationList.propTypes = {
  destinationList: PropTypes.array,
  onDestinationSelection: PropTypes.func
};

export default DestinationList;