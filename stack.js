'use strict';

const mocha      = require('mocha');
const { assert } = require('chai');




function MyStack(...elements) {
  this.stack = elements;

  this.setup = function(reverse) {
    this.reverse = reverse;
  };

  this.push = function(...elements) {
    if(this.reverse)
      return this.stack.unshift(...elements);

    return this.stack.push(...elements);
  };

  this.pop = function() {
    if(this.reverse)
      return this.stack.pop();

    return this.stack.shift();
  };

  this.ping = function() {
    console.log(this.stack);
  };
};



describe("Cool Stacks", () => {
  it("Push to top of stack and get top item", () => {
    const myStack = new MyStack(7, 8, 9, 10);
    myStack.setup(false);

    assert.equal(myStack.push(1, 2, 3, 4, 5, 6), 10);
    assert.deepEqual(myStack.stack, [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
    assert.equal(myStack.pop(), 7);
  });

  it("Push to bottom of stack", () => {
    const myStack = new MyStack(7, 8, 9, 10);
    myStack.setup(true);

    assert.equal(myStack.push(1, 2, 3, 4, 5, 6), 10);
    assert.deepEqual(myStack.stack, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("Should pop item from top of stack", () => {
    const myStack = new MyStack(1, 2, 3, 4, 5, 6);
    myStack.setup(true);

    assert.equal(myStack.pop(), 6);
  });

  it("Should pop item from bottom of stack", () => {
    const myStack = new MyStack(1, 2, 3, 4, 5, 6);
    myStack.setup(false);

    assert.equal(myStack.pop(), 1);
  });
});
