class Queue {
  constructor() {
    this.left  = [];
    this.right = [];
  }

  enqueue(item) {
    this.left.push(item);
  }

  dequeue() {
    while(this.left.length) {
      this.right.push(this.left.pop());
    }

    const item = this.right.pop();

    while(this.right.length) {
      this.left.push(this.right.pop());
    }

    return item;
  }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // 3
queue.dequeue(); // 4
