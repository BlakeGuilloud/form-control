import React, { Component } from 'react';
import { Input } from './components';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <Input label="Hello world" name="helloWorld" initialValue="Heyyo" />
          </div>
          <div className="col-6">
            <Input label="Hello world" name="helloWorld" initialValue="Heyyo" />
          </div>
        </div>
      </div>
    );
  }
}
