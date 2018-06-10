import React, { Component } from 'react';

import Scoreboard from './Scoreboard'
import Dialog from './Dialog';
import Board from './Board';
import RefreshBtn from './RefreshBtn';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: {
        player: 0,
        bot: 0
      },
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      gameRefresh: false
    };
    this.startNewGame = this.startNewGame.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.state.gameRefresh) {
      return;
    }
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    if (calculateWinner(squares) && !this.state.gameRefresh) {
      const onUserTurn = this.state.xIsNext;
      console.log(this.state.score.player)
      if (onUserTurn) {
        this.setState(prevState => {
          return {
            ...prevState,
            score: {
              player: ++prevState.score.player,
              bot: prevState.score.bot
            },
            gameRefresh: true
          }
        })
      } else {
        this.setState(prevState => {
          return {
            ...prevState,
            score: {
              player: prevState.score.player,
              bot: ++prevState.score.bot              
            },
            gameRefresh: true
          }
        })
      }
    }

    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  startNewGame(){
    console.log("function fired")
    this.setState(prevState => {
      return {
        ...prevState,
        gameRefresh: false,
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0
      }
    })
  }
  renderRefreshBtn(){
    return <RefreshBtn onClick={this.startNewGame} gameRefresh={this.state.gameRefresh}/>
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = !this.state.xIsNext? "You have Won!" : "Computer Has Won!"
    } else {
      status = "Current Turn: " + (this.state.xIsNext ? "Your Turn" : "Bot's Turn");
    }
    return (
      <div className="game">
      <Scoreboard score={this.state.score}/>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <Dialog status={status} />
        {
          this.state.gameRefresh
            ? this.renderRefreshBtn()
            : null
        }
      </div>
    );
  }
}

export default Game;
