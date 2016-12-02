import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {}

  state = {
    value: '',
  };

  componentWillMount() {}

  _handleChange = (event) => {}

  render() {
    return (
      <div>
        <button>Hello World</button>
      </div>
    );
  }
}
