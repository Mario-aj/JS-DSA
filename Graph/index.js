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
