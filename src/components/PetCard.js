import React from 'react';
import PetPhoto from './PetPhoto';
import PetName from './PetName';
import PropTypes from 'prop-types';

function PetCard(props) {
  const PetCardStyle={
    padding: '3%'
  }
  return (
    <React.Fragment>
      <div style={PetCardStyle}>
        <PetPhoto photo={props.photo}/>
        <PetName name={props.name}/>
        <hr/>
      </div>
    </React.Fragment>
  );
}

PetCard.propTypes = {
  name: PropTypes.string
};
export default PetCard;