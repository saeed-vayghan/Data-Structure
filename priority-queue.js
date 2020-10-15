/* Queues */

function Queue () { 
  const storage = [];

  this.enqueue = function(member) {
    storage.push(member);
  };

  this.dequeue = function() {
    return storage.shift();
  };

  this.size = function() {
    return storage.length;
  };

  this.isEmpty = function() {
    return this.size() === 0;
  };

  this.print = function() {
    console.log(storage);
  };
};

function PriorityQueue () {
  const storage = [];

  this.enqueue = function(member) {
    // member[0] = message
    // member[1] = priority

    if (this.isEmpty()) {
      storage.push(member);

    } else {

      /*
      * We can user Heap data structure here for better efficiency (O(log n)).
      */

      let added = false;

      for (let i = 0; i < storage.length; i ++) {

         if (member[1] < storage[i][1]) {
          storage.splice(i,0,member);
          added = true;

          break;
        }
      }

      if (!added) {
        storage.push(member);
      }
    }
  };

  this.dequeue = function() {
    return storage.shift();
  };

  this.size = function() {
    return storage.length;
  };

  this.isEmpty = function() {
    return this.size() === 0;
  };

  this.print = function() {
    console.log(storage);
  };
}


const q = new Queue(); 

q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.print();
console.log( q.isEmpty() );


const pq = new PriorityQueue();

pq.enqueue(['a', 2]); 
pq.enqueue(['b', 3]);
pq.enqueue(['c', 7]);
pq.enqueue(['e', 0]);
pq.enqueue(['d', 2]);
pq.print();
pq.dequeue();
pq.print();
