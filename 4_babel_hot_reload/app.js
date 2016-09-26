import React, { Component } from 'react';
import Hello from './Hello';
import Logo from './Logo';

export default class App extends Component {
  render() {
    return (
      <div className='content'>
        <Hello/>
        <Logo/>
      </div>
    )
  }
};
