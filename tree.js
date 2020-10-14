
/*

  Binary Tree

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

  this.contains = function(val) {
    if ( this.data === val ) {
      return true;
    }

    if ( val <= this.data ) {
      if ( this.left === null ) {
        return false;
      }

      return this.left.contains(val);
    }

    if ( val > this.data ) {
      if ( this.right === null ) {
        return false;
      }

      return this.right.contains(val);
    }
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
tree.insert(15);

console.log(tree)

console.log(tree.contains(100))
console.log(tree.contains(14))

tree.printt('inOrder');
