import React, { Component } from 'react';
import { Button, TextArea } from '../components';

export default class ButtonApp extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Hello Primary</Button>
        <Button type="secondary">Hello Secondary</Button>
        <Button type="warning">Hello Warning</Button>
        <Button type="danger">Hello Danger</Button>
        <Button type="default">Hello Default</Button>
        <TextArea label="text area" initialValue="hello text" />
      </div>
    );
  }
}
