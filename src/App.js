import React, { Component } from 'react';
import { Input } from './components';

const dog = require('../dist/js/app.min');
console.log('doggy', dog);

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
