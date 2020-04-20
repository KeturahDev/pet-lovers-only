import React from 'react';
import PetPhoto from './PetPhoto';
import PetName from './PetName';
import PropTypes from 'prop-types';

function PetCard(props) {
  const PetCardStyle={
    border: '1px dashed blue'
  }
  return (
    <React.Fragment>
      <div style={PetCardStyle}>
        <p>Pet Card</p>
        <PetPhoto/>
        <PetName name={props.name}/>
      </div>
    </React.Fragment>
  );
}

PetCard.propTypes = {
  name: PropTypes.string
};
export default PetCard;