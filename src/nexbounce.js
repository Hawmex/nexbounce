'use strict';

/**
 * @classdesc Batches calls and calls the last task in its queue.
 * @example
 * import { Nexbounce } from 'nexbounce';
 *
 * const nexbounce = new Nexbounce();
 *
 * let counter = 0;
 *
 * nexbounce.enqueue(() => (counter += 3));
 * nexbounce.enqueue(() => (counter += 1));
 * nexbounce.enqueue(() => (counter += 2));
 *
 * setTimeout(() => console.log(counter)); // 2
 */

export class Nexbounce {
  #taskWatcher = null;
  #callLatest;
  #cancelPrevious;

  enqueue(task) {
    if (this.#taskWatcher !== null) this.#cancelPrevious();

    this.#taskWatcher = new Promise((resolve, reject) => {
      this.#callLatest = resolve;
      this.#cancelPrevious = reject;
    });

    this.#taskWatcher
      .then(task)
      .catch(() => {})
      .finally(() => (this.#taskWatcher = null));

    Promise.resolve().then(this.#callLatest);
  }
}
