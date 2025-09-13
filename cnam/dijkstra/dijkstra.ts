function dijkstra(graph, start) {
  // Initialisation des distances et prédécesseurs
  const distances = {};
  const predecessors = {};
  const visited = new Set();

  // Initialiser toutes les distances à l'infini et les prédécesseurs à null
  for (let node in graph) {
    distances[node] = Infinity;
    predecessors[node] = null;
  }
    // La distance du nœud de départ à lui-même est toujours 0
  distances[start] = 0;

  console.log("graph :", graph);
  console.log("distances :", distances);
  console.log("predecessors :", predecessors);
    console.log("--------------------");

  while (visited.size < Object.keys(graph).length) {
    // Trouver le nœud non visité avec la plus petite distance
    let currentNode = null;
    let smallestDistance = Infinity;

    for (let node in distances) {
      if (!visited.has(node) && distances[node] < smallestDistance) {
        smallestDistance = distances[node];
        currentNode = node;
      }
    }

    if (currentNode === null) break; // Plus rien à visiter
    visited.add(currentNode);

    // Mise à jour des voisins
    for (let neighbor in graph[currentNode]) {
      let newDistance = distances[currentNode] + graph[currentNode][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        predecessors[neighbor] = currentNode;
      }
    }
  }

  return { distances, predecessors };
}

// Exemple d’utilisation
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2 },
  C: { A: 4, B: 2 }
};

const { distances, predecessors } = dijkstra(graph, "A");
console.log("Distances :", distances);
console.log("Prédécesseurs :", predecessors);