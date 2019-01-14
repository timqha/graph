// DFS
//
const MAX_VERTS = 5;

class Graph {
  constructor(label) {
    this.vertexList = [];
    this.adjMat = [];
    this.theStack = [];
    for (let i = 0; i < MAX_VERTS; i++ ) {
      this.adjMat[i] = this.adjMat[i] ? this.adjMat[i] : [];
      for (let j = 0; j < MAX_VERTS; j ++) {
        this.adjMat[i][j] = 0;
      }
    }
  }

  addEdge(start, end) {
    this.adjMat[start][end] = 1;
    this.adjMat[end][start] = 1;
  }

  addVertex(lab) {
    this.vertexList.push({label: lab, wasVisited: false});
  }

  displayVertex(vertex) {
    console.log(`v: ${this.vertexList[vertex].label}, stack: ${this.theStack}`);
  }

  getAdjUnvisitedVertex(v) {
    for(let j = 0; j< this.vertexList.length; j++) {
      if (this.adjMat[v][j] === 1 && this.vertexList[j].wasVisited === false) {
        return j;
      }
    }
    return -1;
  }

  dfs() {
    // set first vertex
    this.vertexList[0].wasVisited = true;
    this.theStack.push(0);
    this.displayVertex(0); 

    // run until the array is empty
    while (this.theStack.length) {
      let v = this.getAdjUnvisitedVertex(this.theStack[this.theStack.length - 1]);
      if (v === -1) {
        this.displayVertex(this.theStack.pop());
      } else {
        this.vertexList[v].wasVisited = true;
        this.theStack.push(v);
        this.displayVertex(v);
      }
    }
    for(let j = 0; j < this.vertexList.length; j++) {
      this.vertexList[j].wasVisited = false;
    }
  }
  showGraph () {
    console.log(this.adjMat);
    console.log("\n");
  }
}

let graph = new Graph();


graph.addVertex('A'); // 0
graph.addVertex('B'); // 1
graph.addVertex('C'); // 2
graph.addVertex('D'); // 3
graph.addVertex('E'); // 4

// AB
graph.addEdge(0, 1);
// BC
graph.addEdge(1, 2);
// AD
graph.addEdge(0, 3);
// DE
graph.addEdge(3, 4);
graph.showGraph();

graph.dfs();
