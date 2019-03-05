'use strict';

const mocha      = require('mocha');
const { assert } = require('chai');




function MyNode() {
  this.setup = function(next, prev, val) {
    this.next = next;
    this.prev = prev;
    this.val  = val;
  };
};

function MyLinkedList() {
  this.setup = function() {
    this.head = null;
    this.tail = null;
  };

  this.extendHead = function(val) {
    const node = new MyNode();
    node.setup(null, this.head, val);

    if (this.head)
      this.head.next = node;
    else
      this.tail = node;

    this.head = node;
  };

  this.removeHead = function() {
    if (!this.head)
      return null;
    
    const val = this.head.val;

    this.head = this.head.prev;
    
    if (this.head)
      this.head.next = null;
    else
      this.tail = null;

    return val;
  };

  this.extendToTail = function(val) {
    const node = new MyNode();
    node.setup(this.tail, null, val);

    if (this.tail)
      this.tail.prev = node;
    else
      this.head = node;
    
    this.tail = node;
  };

  this.removeTail = function() {
    if (!this.tail)
      return null;

    const val = this.tail.val;

    this.tail = this.tail.next;

    if (this.tail)
      this.tail.prev = null;
    else
      this.head = null;

    return val;
  };

  this.search = function(val) {
    let current = this.head;

    while (current) {
      if (current.val === val) 
        return val;

      current = current.prev;
    }

    return null;
  };

  this.indexOf = function(val) {
    let index     = 0;
    let current   = this.tail;
    const indexes = [];

    while (current) {
      if (current.val === val)
        indexes.push(index);

      current = current.next;
      index++;
    }

    return indexes;
  };

  this.pingHead = function() {
    console.log(this.head);
  };

  this.pingTail = function() {
    console.log(this.tail);
  };

  this.getHeadValue = function() {
    console.log('Head Valus:', this.head ? this.head.val: null);
  };

  this.getTailValue = function() {
    console.log('Tail Valus:', this.tail ? this.tail.val: null);
  };
};



describe("Cool Linked List", () => {
  it("Add to head", () => {
    const list = new MyLinkedList();
    list.setup();

    list.extendHead('a');
    list.extendHead('b');
    list.extendHead('c');
    // c - b - a

    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.val, 'a');
    assert.equal(list.tail.next.val, 'b');
    assert.equal(list.head.val, 'c');
    assert.equal(list.head.prev.val, 'b');
    assert.equal(list.head.next, null);
    assert.equal(list.tail.next.next.val, 'c');
    assert.equal(list.head.prev.prev.val, 'a');
  });

  it("Add to head  - 2", () => {
    const list = new MyLinkedList();
    list.setup();

    list.extendHead('a');
    list.extendToTail('c');
    list.extendHead('b');
    // b - a - c

    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.val, 'c');
    assert.equal(list.tail.next.val, 'a');
    assert.equal(list.head.val, 'b');
    assert.equal(list.head.prev.val, 'a');
    assert.equal(list.head.next, null);
    assert.equal(list.tail.next.next.val, 'b');
    assert.equal(list.head.prev.prev.val, 'c');
  });

  it("Search for val", () => {
    const list = new MyLinkedList();
    list.setup();

    list.extendHead('a');
    list.extendHead('b');
    list.extendHead('c');

    assert.equal(list.search('a'), 'a');
    assert.equal(list.search('b'), 'b');
    assert.equal(list.search('c'), 'c');
    assert.equal(list.search('x'), null);
  });

  it("Search for indexes of vals", () => {
    const list = new MyLinkedList();
    list.setup();

    list.extendToTail('a');
    list.extendToTail('b');
    list.extendToTail('c');
    list.extendToTail('c');
    list.extendToTail('a');

    assert.deepEqual(list.indexOf('a'), [0, 4]);
    assert.deepEqual(list.indexOf('b'), [3]);
    assert.deepEqual(list.indexOf('c'), [1, 2]);
    assert.deepEqual(list.indexOf('x'), []);
  });
});
