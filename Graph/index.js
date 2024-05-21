class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }

    return this;
  }

  addEgde(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
}

const g = new Graph();

g.addVertex("Luanda");
g.addVertex("Benguela");
g.addVertex("Bengo");
g.addVertex("Uige");
g.addVertex("Zaire");
g.addVertex("Huambo");
g.addVertex("Cunene");

console.log(g.adjacencyList);

console.log("=================== ADDING Edge =======================");
g.addEgde("Luanda", "Bengo");
g.addEgde("Bengo", "Uige");
g.addEgde("Uige", "Zaire");
g.addEgde("Bengo", "Zaire");
