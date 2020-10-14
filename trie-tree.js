/*

  Trie (Tree)
  
  Inputs: us, use, usage, user, add, admin, adapt


          root
        u     a
      s         d   
    e  a      a  m  d
  r     g    p     i
         e  t       n

*/

class Node {
  constructor() {
    this.value     = undefined;
    this.completed = false;
    this.children  = new Array();
  }
}

class TrieTree {

  constructor() {
    this.root = new Node();
  }

  getRoot() {
    return this.root;
  }

  // Simple method to return index
  getIndex (char) {
    return {
      numeric: char.charCodeAt(0) - 'a'.charCodeAt(0),
      alpha: char
    }
  }

  insert(word, value) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {

      const index = this.getIndex(word[i]).alpha;

      if (!node.children[index]) {

        const tempNode = new Node();

        node.children[index] = tempNode;
        node = tempNode;

      } else {

        node = node.children[index];
      }
    }

    node.value     = value;
    node.completed = true;
  }

  searchNode(input) {
    let node = this.root;

    for (let i = 0; i < input.length; i++) {
      const index = this.getIndex(input[i]).alpha;

      if (node.children[index]) {

        node = node.children[index];

      } else {

        return null;
      }
    }

    if ( node === this.root ) {
      return null;
    }

    return node;
  }

  findPrefix(prefix) {
    const node = this.searchNode(prefix);

    if ( node === null ) {
      return null;
    }

    return node;
  }

  print(node, prefix = '') {
    if (node.completed) {
      console.log('==>', prefix);
    }

    for (const child in node.children) {
      if (child) {
        this.print(node.children[child], `${prefix}${child}`);
      }
    }
  }
}


const tree = new TrieTree();
tree.insert('a', 0);
tree.insert('ax', 1);
tree.insert('bx', 2);
tree.insert('cx', 3);
tree.insert('dx', 4);
tree.insert('aax', 5);
tree.insert('abxhello', 6);
tree.insert('abcone', 7);
tree.insert('abctwo', 7);

// console.log(tree)
// console.log(tree.root.children['a'])

const node = tree.searchNode('ax');
console.log('node.value', node.value); // 1

const nodex = tree.findPrefix('abc');
tree.print(nodex);
