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

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;

    this.adjacencyList[vertex].forEach((element) => {
      this.removeEdge(vertex, element);
    });

    delete this.adjacencyList[vertex];

    return true;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
console.log(graph);

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("D", "A");
graph.addEdge("D", "B");
graph.addEdge("D", "C");
console.log(graph);

// graph.removeEdge("A", "B");
// console.log(graph);

graph.removeVertex("D");
console.log(graph.adjacencyList);
