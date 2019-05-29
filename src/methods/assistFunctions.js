import { SLOPE_NORMAL, SLOPE_EARTHQUAKE } from '../assets/refer.js';

/*
function converter(str) {
  let result = [];
  str.split(' ')
    .forEach(s => {
      let arr = [s.slice(0, 2), s.slice(2, 4), s.slice(4)].map(x => Number(x));
      //let arr = str.split(' ').map(x=>Number(x));
      result.push((arr[0] + ((arr[1] + arr[2] / 100 / 60) / 60)).toFixed(6));
    });
  console.log(result.join(', '));
}

converter('91444793 29421666');
 */

export const getFs = (model_type, state) => {
  switch (model_type) {
    case SLOPE_NORMAL:
      return state.fs_normal;
    case SLOPE_EARTHQUAKE:
      return state.fs_earthquake;
    default:
      return;
  }
};

export const convertNumToDateString = num=> {
  const date = new Date(num);
  return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

class Timer {
  constructor(fn, delay) {
    this._timer = undefined;
    this._fn = fn;
    this._delay = delay;
    this._isOn = false;
  }

  get isOn() {
    return this._isOn;
  }

  set isOn(bool) {
    if (bool) {
      this.start();
    } else {
      this.stop();
    }
  }

  get delay() {
    return this._delay;
  }

  set delay(num) {
    if (typeof num !== 'number') {
      console.error('应传入一个数字');
      return;
    }
    this.stop();
    this._delay = num;
    if (this._isOn) {
      this.start();
    }
  }

  set fn(func) {
    if (typeof func !== 'function') {
      console.error('应传入一个函数');
      return;
    }
    this.stop();
    this._fn = func;
    if (this._isOn) {
      this.start();
    }
  }

  start() {
    if (this._fn && this._delay) {
      this._timer = setInterval(this._fn, this._delay);
      this._isOn = true;
    }
  }

  stop() {
    clearInterval(this._timer);
    this._isOn = false;
  }

  getStatus(property) {
    switch (property.toUpperCase()) {
      case 'FN':
        return this._fn;
      case 'DELAY':
        return this._delay;
      default:
        return;
    }
  }
}

export { Timer };
