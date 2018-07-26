import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectionBtn from './SelectionBtn';
import StartHeader from './StartHeader';
import StatusComingSoon from './StatusComingSoon';
import './../../App.css';
import './StartMenu.css';

class StartMenu extends Component {
  render() {
    return (
      <section className="start-menu">
        <article>
          <StartHeader />
          <article className="preference-cta">
            <div>
              <h3 className="select-cta">Select Preference:</h3>
              <div className="decor-line"></div>
            </div>
          </article>
          <article className="selection-btn-container">
            <SelectionBtn
              playerSelection="Single Player" 
              btnDescription="You and the machine, battle it out"
              disabled="true"
            />
            <SelectionBtn 
              selectPlayerOption={this.props.selectPlayerOption} 
              playerSelection="Two Player" 
              btnDescription="You and an arch nemesis" 
            />
          </article>
          <StatusComingSoon message="[ One Player Mode - Coming Soon ]"/>
        </article>
      </section>
    );
  }
}
StartMenu.propTypes = {
  selectPlayerOption: PropTypes.func
}
export default StartMenu;
