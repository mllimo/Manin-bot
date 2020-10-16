
'use strict'

class Queue {
  constructor() {
    this.isRuning_ = false;
    this.inQueue_ = [];
  }

  add(action, thisObject, ...argv) {
    this.inQueue_.push( new Promise((resolve) => {
      action.call(thisObject, ...argv);
      resolve('action finished');
    }));
    if (!this.isRuning_) this.next();
  }

  next() {
    this.isRuning_ = true;
    if (this.isEmpty()) {
      this.isRuning_ = false;
      return;
    }
    const action = this.inQueue_.shift();
    new Promise(resolve => {
      // Either fn() completes or the timeout of 10sec is reached
      action.then(resolve);
      setTimeout(resolve, 5000);
    }).then(() => this.next());
  }

  isEmpty() {
    return this.inQueue_.length === 0;
  }

}

module.exports = Queue;