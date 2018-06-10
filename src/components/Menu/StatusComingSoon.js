import React from 'react';

const StatusComingSoon = (props) => {
  const viewWidth = window.innerWidth;
  // this chooses a font size on load - i.e. fontSize is not responsive
  const fontSize = viewWidth < 768 ? "0.8em" : "1em";
  const messageStyle = {
    "textAlign": "center",
    "fontSize": fontSize
  }
  return (
    <article>
      <h5 style={ messageStyle }>{props.message}</h5>
    </article>
  )
}

export default StatusComingSoon;