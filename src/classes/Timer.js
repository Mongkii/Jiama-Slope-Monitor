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

export default Timer;
