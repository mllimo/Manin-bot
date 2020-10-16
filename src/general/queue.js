
'use strict'

class Queue {

  constructor() {
    this.isRuning_ = false;
    this.inQueue_ = [];
  }

  /**
   * Añade en la cola una promesa con la función y la ejecuta.
   * @param {Function} action callback
   * @param {Object} thisObject this de la función
   * @param  {...any} argv argumentos de la función
   */
  add(action, thisObject, ...argv) {
    this.inQueue_.push(new Promise((resolve) => {
      action.call(thisObject, ...argv);
      resolve('action finished');
    }));
    if (!this.isRuning_) this.next();
  }

  /**
   * Llama a las promesas de la cola si hay alguna
   */
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

  /**
   * Comprueba si la cola está vacía
   * @returns {bool} True si la cola está vacía : si no lo está
   */
  isEmpty() {
    return this.inQueue_.length === 0;
  }

}

module.exports = Queue;