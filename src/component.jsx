import React, { Component } from 'react';
import { dd, ddd } from './ddd';

export class HotReloadComponent extends Component {
  render() {
    const test = function Test() { return '123';};
    const qwerty = ['test 1234', 'erewe'];
    dd({
      'test': '123',
      'qwe': 123,
      're': 'rwer',
      'sdf': { 'test': 'sdf' },
      'dasd': ['test'],
    });
    ddd({ test, qwerty });
    ddd('dfsdf');
    ddd(12331);
    ddd(new Date());
    ddd(null);
    ddd(undefined);
    ddd(function exampleFunc() {});
    return (
      <div className="test">
        <div style={{ color: 'green' }}>
          This is hot reload test
        </div>
      </div>
    );
  }
}
