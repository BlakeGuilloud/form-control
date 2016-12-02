import React, { Component } from 'react';
import { Button, Input } from './components';
console.log('Button', Button);

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
        <Button type="primary">Hello world</Button>
      </div>
    );
  }
}
