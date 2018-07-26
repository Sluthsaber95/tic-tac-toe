import React, { Component } from 'react';

import Game from './components/Game/Game';
import StartMenu from './components/Menu/StartMenu';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPreference: false
    };
    this.selectPlayerOption = this.selectPlayerOption.bind(this);
  }
  selectPlayerOption(){
    this.setState({ selectedPreference: true })
  }

  render() {
    const selectedPreference = this.state.selectedPreference;
    let gameDisplay = selectedPreference ? <Game /> : <StartMenu selectPlayerOption={this.selectPlayerOption}/>;
    return (
      <section>
        {gameDisplay}
      </section>
    );
  }
}
export default App;
