class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(verter) {
    if (!verter || this.adjacencyList[verter]) return false;

    this.adjacencyList[verter] = [];
    return true;
  }
}

const graph = new Graph();
graph.addVertex("A");

console.log(graph);
