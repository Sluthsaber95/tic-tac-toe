import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playValue: null
    };
    this.fillSquare = this.fillSquare.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };
  fillSquare(){
    this.setState({ playValue: this.props.playerTurn? "X": "O" })
  }
  handleClick() {
    this.fillSquare();
    this.props.changePlayer();
    this.props.updateBoard(this.props.index)
  }
  render() {
    return (
      <button className="board-square" onClick={this.handleClick}>{this.state.playValue}</button>
    );
  }
}
export default Square;