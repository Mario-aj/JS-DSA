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

  addEdge(vertex1, vertex2) {
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

  removeVertex(vertex) {
    let removedVertex = this.adjacencyList[vertex];

    if (!removedVertex) return;

    while (this.adjacencyList[vertex].length) {
      let currentEdge = this.adjacencyList[vertex].pop();

      this.removeEdge(currentEdge, vertex);
    }

    delete this.adjacencyList[vertex];

    return removedVertex;
  }

  dfs(startPoint) {
    if (!this.adjacencyList[startPoint]) return;

    let stack = [];
    let visited = {};

    stack.push(startPoint);

    while (stack.length) {
      let currentVertex = stack.pop();

      if (visited[currentVertex]) continue;

      console.log(currentVertex);
      visited[currentVertex] = true;

      if (this.adjacencyList[currentVertex].length) {
        stack.push(...this.adjacencyList[currentVertex]);
      }
    }
  }

  dfsRecursive(startPoint) {
    let result = [];
    let visited = {};

    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }

    dfs(startPoint);

    return result;
  }

  bfs(vertex) {
    if (!this.adjacencyList[vertex]) return;

    let queue = [vertex];
    let result = [];
    let visited = {};

    visited[vertex] = true;

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  #remove(list, element) {
    return list.filter((cc) => cc !== element);
  }
}

const g = new Graph();

g.addVertex("Bengo");
g.addVertex("Benguela");
g.addVertex("Bié");
g.addVertex("Cabinda");
g.addVertex("Cuando Cubango");
g.addVertex("Cuanza Norte");
g.addVertex("Cuanza Sul");
g.addVertex("Cunene");
g.addVertex("Huambo");
g.addVertex("Huíla");
g.addVertex("Luanda");
g.addVertex("Lunda Norte");
g.addVertex("Lunda Sul");
g.addVertex("Malanje");
g.addVertex("Moxico");
g.addVertex("Namibe");
g.addVertex("Uíge");
g.addVertex("Zaire");

console.log(g.adjacencyList);

console.log("=================== ADDING Edge =======================");
g.addEdge("Luanda", "Bengo");
g.addEdge("Bengo", "Cuanza Norte");
g.addEdge("Bengo", "Cuanza Sul");
g.addEdge("Bengo", "Uíge");
g.addEdge("Bengo", "Zaire");
g.addEdge("Cuanza Norte", "Cuanza Sul");
g.addEdge("Cuanza Norte", "Malanje");
g.addEdge("Cuanza Sul", "Benguela");
g.addEdge("Cuanza Sul", "Huambo");
g.addEdge("Benguela", "Huambo");
g.addEdge("Benguela", "Huíla");
g.addEdge("Huambo", "Bié");
g.addEdge("Huambo", "Huíla");
g.addEdge("Huíla", "Namibe");
g.addEdge("Huíla", "Cunene");
g.addEdge("Namibe", "Cunene");
g.addEdge("Cuando Cubango", "Cunene");
g.addEdge("Cuando Cubango", "Moxico");
g.addEdge("Moxico", "Bié");
g.addEdge("Moxico", "Lunda Sul");
g.addEdge("Bié", "Malanje");
g.addEdge("Bié", "Lunda Sul");
g.addEdge("Lunda Sul", "Lunda Norte");
g.addEdge("Lunda Norte", "Uíge");
g.addEdge("Uíge", "Zaire");
g.addEdge("Zaire", "Cabinda");
g.addEdge("Uíge", "Malanje");
console.log(g.adjacencyList);

console.log("=================== DFS =======================\n");
g.dfs("Luanda");

console.log("=================== RECURSIVE DFS =======================\n");
let result = g.dfsRecursive("Luanda");
console.log(result);

console.log("=================== BFS =======================\n");
result = g.bfs("Luanda");
console.log(result);

console.log("\n=================== REMOVE Edge =======================");
g.removeEdge("Luanda", "Bengo");
g.removeEdge("Uige", "Zaire");
console.log(g.adjacencyList);

console.log("=================== REMOVE VERTEX =======================");
g.removeVertex("Benguela");
g.removeVertex("Bengo");
console.log(g.adjacencyList);
