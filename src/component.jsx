import React, { Component } from 'react';
import './styles';
import { default as ddd } from './ddd';

export class HotReloadComponent extends Component {
  render() {
    const test = function Test() { return '123';};
    const qwerty = ['test 1234', 'erewe'];
    ddd({ test, qwerty });
    ddd({ test, qwerty });
    return (
      <div className="test">
        <div style={{ color: 'green' }}>
          This is hot reload test
        </div>
      </div>
    );
  }
}
