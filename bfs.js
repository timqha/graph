// BFS
//
const MAX_VERTS = 5;

class Graph {
  constructor(label) {
    // save vertex format {label: string, vasVisited: boolean}
    this.vertexList = [];
    this.adjMat = [];
    this.theQueue = [];
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
    console.log(`v: ${this.vertexList[vertex].label}, Queue: ${this.theQueue}`);
  }

  getAdjUnvisitedVertex(v) {
    for(let j = 0; j< this.vertexList.length; j++) {
      if (this.adjMat[v][j] === 1 && this.vertexList[j].wasVisited === false) {
        return j;
      }
    }
    return -1;
  }

  bfs() {
    // set first vertex
    this.vertexList[0].wasVisited = true;
    this.theQueue.push(0);
    this.displayVertex(0);
    let v2;

    // run until the Queue is empty
    while (this.theQueue.length) {
      let v1 = this.theQueue.shift();

      while (this.getAdjUnvisitedVertex(v1) !== -1) {
        v2 = this.getAdjUnvisitedVertex(v1);
        this.vertexList[v2].wasVisited = true;
        this.theQueue.push(v2);
        this.displayVertex(v2);
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

graph.bfs();
// graph.bfs();
