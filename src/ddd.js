import kindOf from 'kind-of';

class DDD {
  constructor(params) {
    this._console(params);
  }

  _line() {
    const symbols = ['-', '_', '@', '#', '$', '^', '+', '*', '>', '<', '?', '|'];
    const rand = Math.floor(Math.random() * symbols.length);
    let line = '';

    for (let j = 0; j <= 50; j++) {
      line += (j === 25) ? ` (DDD) ${new Date()}` : symbols[rand];
    }
    return line;
  }

  _console(params) {
    console.groupCollapsed(this._line());
    for (const i in params) {
      if (params.hasOwnProperty(i)) {
        console.group(`Variable name: ${i}`);
        console.info(`Type: ${kindOf(params[i])}`);
        console.debug(`Value: ${params[i]}`);
        console.groupEnd();
      }
    }
    console.groupEnd();
  }
}

export default (data) => {
  if (process.env.ENV_VARIABLE !== 'production') {
    return new DDD(data);
  }
};
