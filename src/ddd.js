import kindOf from 'kind-of';

class JS_DDD {
  _line(call = ` (DDD) `) {
    const symbols = ['-', '_', '@', '#', '$', '^', '+', '*', '>', '<', '?', '|'];
    const rand = Math.floor(Math.random() * symbols.length);
    let line = '';

    for (let j = 0; j <= 50; j++) {
      line += (j === 25) ? call : symbols[rand];
    }
    return line;
  }
}

class DD extends JS_DDD {
  constructor(params) {
    super(params);
    this._console(params);
  }

  _console(params) {
    console.groupCollapsed(super._line(` (DD) `));

    const table = {};
    Object.keys(params).forEach((key) => {
      let value = params[key];
      if (kindOf(params[key] === 'object')) {
        value = JSON.stringify(params[key]).replace(/\"/g, '');
      }
      table[key] = { value };
    });

    console.table(table);
    console.groupEnd();
  }
}

class DDD extends JS_DDD {
  constructor(params) {
    super(params);
    console.groupCollapsed(super._line());
    if (kindOf(params) !== 'object' && kindOf(params) !== 'array') {
      this._default(params);
    } else {
      this[kindOf(params)](params);
    }
    console.groupEnd();
  }

  object(params) {
    for (const i in params) {
      if (params.hasOwnProperty(i)) {
        console.groupCollapsed(`Variable name: ${i}`);
        console.info(`Type: ${kindOf(params[i])}`);
        console.debug(`Value: ${params[i]}`);
        console.groupEnd();
      }
    }
  }

  _default(params) {
    console.info(`Type: ${kindOf(params)}`);
    console.debug(`Value: ${params}`);
  }
}

function dd(params) {
  if (process.env.ENV_VARIABLE !== 'production') {
    if (kindOf(params) !== 'object') {
      console.warn(' --- (DD has been fallen down to DDD) ---');
      return new DDD(params);
    }
    return new DD(params);
  }
}

function ddd(params) {
  if (process.env.ENV_VARIABLE !== 'production') {
    return new DDD(params);
  }
}

module.exports = { dd, ddd };

window.dd = dd;
window.ddd = ddd;
