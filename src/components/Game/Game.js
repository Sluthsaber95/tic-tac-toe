import React, { Component } from 'react';

import Dialog from './Dialog';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      winCounter: {
        player: 0,
        cpu: 0
      }
    }
    this.updateGameStatus = this.updateGameStatus.bind(this);
  }
  updateGameStatus(userWon){
    let playerCount = this.state.winCounter.player;
    if(userWon){
      let playerCount = this.state.winCounter.player;
      this.setState(prevState => (
        { 
          winCounter: {
            ...prevState.winCounter,
            player: ++playerCount
          }
      }))
    } else {
      let cpuCount = this.state.winCounter.cpu
      this.setState(prevState => (
        {
          winCounter: {
            ...prevState.winCounter,
            cpu: ++ cpuCount
          }
      }))
    }
  }
  componentDidUpdate(){
    console.log("Player Total Points" + this.state.winCounter.player);
  }
  render() {
    return (
      <section className="">
        <Board updateGameStatus={this.updateGameStatus}/>
        <Dialog />
      </section>
    );
  }
}
export default Game;
