import React, { Component } from 'react';

export default class Hello extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Demo App!</h1>
        <input type='text'/>
      </div>
    )
  }
}
