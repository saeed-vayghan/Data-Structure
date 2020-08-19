class Stack {
  constructor() {
    this.items = [];
    this.top   = null;
  }

  size() {
    return this.items.length;
  }

  getTop() {
    if (this.items.length) {
      return this.top;
    }

    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
    this.top = item;
  }

  pop() {
    const length = this.items.length

    if (length != 0) {

      if (length === 1) {
        this.top = null;
        return this.items.pop();

      } else {

        this.top = this.items[length - 2];
        return this.items.pop();
      }

    } else {

      return null;
    }
  }
}



function isBalanced(input) {
  const stack = new Stack();

  for (let i=0; i<input.length; i++) {

    // closing
    if ( input[i] === '}' || input[i] === ')' || input[i] === ']' ) {

      if (stack.isEmpty()) {
        return false
      }

      let output = stack.pop();

      // If there is no opening character for any closing one => returns false.
      if (
        ((input[i] === "}") && (output != "{")) ||
        ((input[i] === ")") && (output != "(")) ||
        ((input[i] === "]") && (output != "["))
      ) {
        return false;
      }

    } else {

      // openning
      stack.push(input[i]);
    }
  }

  if (!stack.isEmpty()) {
    return false
  }

  return true
}


let input = "{{{(([([])]))}}}"
console.log(input, isBalanced(input))

input = "{([({))]}"
console.log(input, isBalanced(input))
