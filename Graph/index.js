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

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.#remove(
        this.adjacencyList[vertex1],
        vertex2
      );
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.#remove(
        this.adjacencyList[vertex2],
        vertex1
      );
    }
  }

  #remove(list, element) {
    return list.filter((cc) => cc !== element);
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
console.log(g.adjacencyList);

console.log("=================== REMOVE Edge =======================");
g.removeEdge("Luanda", "Bengo");
g.removeEdge("Uige", "Zaire");
console.log(g.adjacencyList);
