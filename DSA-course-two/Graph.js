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

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );

      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );

      return true;
    }

    return false;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph);

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
console.log(graph);

graph.removeEdge("A", "B");
console.log(graph);
