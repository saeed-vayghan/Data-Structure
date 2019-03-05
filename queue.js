'use strict';

const mocha      = require('mocha');
const { assert } = require('chai');




function MyQueue(...elements) {
  this.queue = elements;

  this.setup = function(reverse) {
    this.reverse = reverse;
  };

  this.enqueue = function(...elements) {
    if(this.reverse)
      return this.queue.unshift(...elements);

    return this.queue.push(...elements);
  };

  this.dequeue = function() {
    if(this.reverse)
      return this.queue.pop();

    return this.queue.shift();
  };

  this.ping = function() {
    console.log(this.queue);
  };
};



describe("Cool Queues", () => {
  it("Push to the left", () => {
    const myQ = new MyQueue('four', 'five');
    myQ.setup(true);

    assert.equal(myQ.enqueue('one', 'two', 'three'), 5);
    assert.deepEqual(myQ.queue, ['one', 'two', 'three', 'four', 'five']);
  });

  it("Pop item from the right", () => {
    const myQ = new MyQueue('one', 'two', 'three');
    myQ.setup(true);

    assert.equal(myQ.dequeue(), 'three');
  });

  it("Push to the right", () => {
    const myQ = new MyQueue('four', 'five');
    myQ.setup(false);

    assert.equal(myQ.enqueue('one', 'two', 'three'), 5);
    assert.deepEqual(myQ.queue, ['four', 'five', 'one', 'two', 'three']);
  });

  it("Pop item from the left", () => {
    const myQ = new MyQueue('one', 'two', 'three');
    myQ.setup(false);

    assert.equal(myQ.dequeue(), 'one');
  });
});
