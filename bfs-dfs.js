// list

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    // initialize the adjacent list with a 
    // null array
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let adjKeys = this.adjList.keys();
    for (let i of adjKeys) {
      let adjValues = this.adjList.get(i);
      let acc = "";
      for (let j of adjValues) {
        acc += j + " ";
      }

      console.log(`${i} -> ${acc}`);
    }
  }

  bfs(startingNode) {
    let visited = [];
    for (let i = 0; i < this.noOfVertices; i++ ) {
      visited[i] = false;
    }

    let q = []; // Queue
    visited[startingNode] = true;
    q.push(startingNode);

    while (q.length) {
      let getQueueElement = q.shift();
      console.log(`v: ${getQueueElement}, Queue: ${q}`); 

      let getList = this.adjList.get(getQueueElement); 
      for (let i in getList) {
        let neigh = getList[i];
        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }

  dfs(startingNode) { 
    let visited = []; 
    for (let i = 0; i < this.noOfVertices; i++) {
      visited[i] = false; 
    }
    this.DFSUtil(startingNode, visited); 
  } 
    
  DFSUtil(vert, visited) {
      visited[vert] = true; 
    
      let getNeighbours = this.adjList.get(vert); 
      console.log(vert + " " + getNeighbours); 
    
      for (let i in getNeighbours) { 
          let getElem = getNeighbours[i]; 
          if (!visited[getElem]) 
              this.DFSUtil(getElem, visited); 
      } 
  }
}


let graph = new Graph(6);
let vertices = ['A', 'B', 'C', 'D', 'E'];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');

graph.printGraph();
graph.dfs('A');