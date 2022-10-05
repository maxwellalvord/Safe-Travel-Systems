import React from 'react';
import Destination from './destination';
import PropTypes from 'prop-types';
import styled from 'styled-components';


<style>
@import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');
</style>

const Dest = styled.ul`
  background-color: #0EA268;
  width: 1230px;
  margin: auto;
  margin-top: 4%;
  border: 2px solid #FFFBC8;
  padding: 25px;
  border-radius: 10px;
  font-family: 'Peralta', cursive;
`;

export default function DestinationList(props){

  return (
    <React.Fragment>
      
      <Dest>
          {props.destinationList.map((destination) =>
            <Destination 
              whenDestinationClicked={props.onDestinationSelection}
              City={destination.City}
              Date={destination.Date}
              Info={destination.Info}
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