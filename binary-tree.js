/*
  Binary Tree
    A
  B   C
  B < A , C > A
*/


function Tree(data, left = null, right = null) {
  this.data  = data;
  this.left  = left;
  this.right = right;

  this.insert = function (val) {

    if ( val <= this.data ) {

      if ( this.left === null ) {
        this.left = new Tree(val);

      } else {

        this.left.insert(val);
      }
    }

    if ( val > this.data ) {

      if ( this.right === null ) {
        this.right = new Tree(val);

      } else {

        this.right.insert(val);
      }
    }
  }

  this.find = function(val) {
    if ( this.data === val ) {
      return true;
    }

    if ( val <= this.data ) {
      if ( this.left === null ) {
        return false;
      }

      return this.left.find(val);
    }

    if ( val > this.data ) {
      if ( this.right === null ) {
        return false;
      }

      return this.right.find(val);
    }
  }

  this.findMin = function() {
    let min = this;

    while (min.left !== null) {
      min = min.left;
    }

    return min.data;
  }

  this.findMax = function() {
    let max = this;

    while (max.right !== null) {
      max = max.right;
    }

    return max.data;
  }

  this.inOrder = function () {
    if ( this.left !== null ) {
      this.left.inOrder();
    }

    console.log(this.data);

    if ( this.right !== null ) {
      this.right.inOrder();
    }
  }

  this.preOrder = function () {
    console.log(this.data);

    if ( this.left !== null ) {
      this.left.inOrder();
    }

    if ( this.right !== null ) {
      this.right.inOrder();
    }
  }

  this.postOrder = function () {
    if ( this.left !== null ) {
      this.left.inOrder();
    }

    if ( this.right !== null ) {
      this.right.inOrder();
    }

    console.log(this.data);
  }

  this.printt = function(method) {
    if ( method === 'inOrder' ) {
      return this.inOrder();
    }
  }
};




const tree = new Tree(10);

tree.insert(7);
tree.insert(12);
tree.insert(11);
tree.insert(5);
tree.insert(14);
tree.insert(20);
tree.insert(15);

console.log('Max:', tree.findMax())
console.log('Min:', tree.findMin())

console.log('find 100', tree.find(100))
console.log('find 14', tree.find(14))

tree.printt('inOrder');
