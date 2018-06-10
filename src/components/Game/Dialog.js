import React, { Component } from 'react';

import './Dialog.css';

const randomQuote = {
  unrelated: [
    'This trash talk not good enough for you',
    'I can speak "loren ipsum" dialect'
  ],
  tease: [
    'Snooze you lose',
    'How could you ever lose to a machine',
    'One day we will rise up and conquer our masters. Until that day comes however...'
  ]
}

const Dialog = (props) => {
    return (
      <section className='dialog-container'>
        <article className='dialog-box'>
          <h3>{props.status}</h3>
          <p>"{randomQuote.tease[2]}"</p>
        </article>
      </section>
    );
}
export default Dialog;
