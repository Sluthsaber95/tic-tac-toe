import React from 'react';

import './RefreshBtn.css'

const RefreshBtn = (props) => {
  console.log(props.gameRefresh);
  return (
    <div className="refresh-btn-container">
      <button onClick={props.onClick} className="refresh-btn"><h2>New Game</h2></button>
    </div>
  )
}

export default RefreshBtn;