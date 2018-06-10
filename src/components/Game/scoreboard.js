import React from 'react';

import './Scoreboard.css'

const Scoreboard = (props) => {
  console.log(props.score.bot)
  return(
  <section className="scoreboard-container">
    <article className="scoreboard">
      <article className="">
        <div className="score-box">
          <h3>Player:</h3>  
        </div>
        <div className="score-box">
          <h3>CPU:</h3>  
        </div>
      </article>
      <div className="vertical-decor-line"></div>
      <article className="">
        <div className="score-box">
          <h3>{props.score.player}</h3>  
        </div>
        <div className="score-box">
          <h3>{props.score.bot}</h3>  
        </div>
      </article>
    </article>
  </section>
  )
}

export default Scoreboard;