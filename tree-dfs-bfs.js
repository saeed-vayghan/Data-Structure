/*
  Using Stack

  We can user simpla Js Array as a Stack

  const stack = [root]
  to push operation ==> queue.push()
  to pop  operation ==> queue.pop()
*/
function DFS_Simple(graph, root) {
  const stack = [root];
  const seen  = {};

  whils( stack.length !== 0 ) {
    const node = stack.pop();

    if ( !seen[node] ) {
      console.log('--- Node has been seen:', node);
      seen[node] = true;
    }

    for ( const adjacent of node.adjacent ) {
      if ( !seen[adjacent] ) {
        stack.push(adjacent);
      }
    }
  }
};


/*
  Using Queue

  We can user simpla Js Array as a Queue

  const queue = [root]
  to enqueue operation ==> queue.push()
  to dequeue operation ==> queue.shift()
*/
function BFS_Simple(graph, root) {
  const queue = new Queue;
  const seen  = {};

  queue.enqueu(root)

  whils( !queue.isEmpty ) {
    const node = queue.dequeue();

    if ( !seen[node] ) {
      console.log('--- Node has been seen:', node);
      seen[node] = true;
    }

    for ( const adjacent of node.adjacent ) {
      if ( !seen[adjacent] ) {
        queue.enqueu(adjacent);
      }
    }
  }
};



// Using Queue
function BFS_ALT(graph, root) {
  const queue    = [root];
  const nodesLen = {};

  for (let i = 0; i < graph.length; i ++) {
    nodesLen[i] = null;
  }

  nodesLen[root] = 0;
  
  let current;

  while (queue.length !== 0) {
    current = queue.shift();
    
    const curConnected = graph[current];
    const neighborIdx  = []; 

    let idx = curConnected.indexOf(1);

    while (idx !== -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }
    
    for (let j = 0; j < neighborIdx.length; j++) {

      if ( nodesLen[neighborIdx[j]] === null ) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }

  return nodesLen;
};

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(BFS(exBFSGraph, 1));
