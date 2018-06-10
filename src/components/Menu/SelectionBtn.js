import React, {  Fragment } from 'react';
import PropTypes from 'prop-types';

import './SelectionBtn.css'

const SelectionBtn = (props) => {
  const disabledStyle = props.disabled 
    ? { "opacity":"0.25"}
    : { "opacity":"1" };
  return (
    <Fragment>
      <button onClick={props.selectPlayerOption} style={disabledStyle} className="select-btn" disabled={props.disabled}>
        <h3>{props.playerSelection}</h3>
        <h4>{props.btnDescription}</h4>
      </button>
    </Fragment>
  );
};

SelectionBtn.propTypes = {
  playerSelection: PropTypes.string,
  btnDescription: PropTypes.string
};
export default SelectionBtn;
