
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDestinations = styled.div`
background-color: #2CE32F;
width: 300px;
margin: auto;
padding: 45px;
border: 2px solid #fffbc8;
text-align: center;
border-radius: 10px;
`;

const H3 = styled.h3`
font-size: 22px;
color: #FFFBC8;
`
const MainDestination = styled.div`
background-color: #0EA268;
width: 1280px;
margin: auto;
border: 2px solid #FFFBC8;
padding-top: 150px;
padding-bottom: 150px;
border-radius: 10px;

`;

const Button = styled.button`
background-color: #5c8c9c;
border: 2px solid #FFFBC8;
margin: 10px;
color: #FFFBC8;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline;
font-size: 16px;
border-radius: 10px;
cursor: pointer;
`;

export default function DestinationDetail(props){
  
  const { destination, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <div className='detail'>
        <MainDestination>
          <MainDestinations>
          <h2>Destination Detail</h2>
          <H3>{destination.Date} {destination.City}</H3>
          <h2>{destination.Info}</h2>
          {/* <Button onClick={onClickingEdit}>Update Destination</Button> */}
          <Button onClick={()=> onClickingDelete(destination.id)}>Close Destination</Button>
          </MainDestinations>
        </MainDestination>
      </div>
    </React.Fragment>
  );
}

DestinationDetail.propTypes = {
  destination: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};