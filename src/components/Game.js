import React, { Component } from 'react';

import Dialog from './Dialog';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <section className="">
        <Dialog />
        <Board />
        <Dialog />
      </section>
    );
  }
}
export default Game;
