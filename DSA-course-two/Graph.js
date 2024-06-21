class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(verter) {
    if (!verter || this.adjacencyList[verter]) return false;

    this.adjacencyList[verter] = [];
    return true;
  }

  addEdge(verter1, verter2) {
    if (!this.adjacencyList[verter1] || !this.adjacencyList[verter2])
      return false;

    this.adjacencyList[verter1].push(verter2);
    this.adjacencyList[verter2].push(verter1);
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
console.log(graph);

graph.addEdge("A", "B");
console.log(graph);
