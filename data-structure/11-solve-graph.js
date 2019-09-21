Write a function that determines if a path exists between two vertices of
a directed graph.

The graph will be represented as an object, each of whose keys represents
a vertex of the graph and whose value represents all vertices that can be
reached from the aforementioned key.


const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

const doesPathExist = (graph, start, target) => {
  //if there are no nodes connected to the start, return false
  if (!graph[start]) return false;
  let visited = {};
  //start tracking visited nodes --> visited = {start: true}
  visited[start] = true;
  return graph[start].some((vertex) => {
    //if this item in the array is the end of the path, return true
    if (vertex === target) return true;
    //if we have not yet visited this item in the array, keep looking by recursing
    if (!visited[vertex]) {
      return doesPathExist(graph, vertex, target);
    } else {
      //else, if we have already visited this item in the array,
      // that means we do not want to keep looking infinitely
      return false;
    }
  })
}

// O(V + E) time where V is the number of vertices and E is the number of edges.
// We MUST attempt to visit every node, which will take us through potentially many edges.

// Keeping track of a 'visited' object means we need O(v) additional space
