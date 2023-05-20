/*eslint-disable*/
let graph: number[][] = [
  [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
  [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
  [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
  [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
  [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
  [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
  [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
  [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
  [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]
];

function dijkstra(graph: string | any[], src: string | number)
{
  let dist: number[] = [];
  let sptSet: boolean[] = [];

  for(let i = 0; i < graph.length; i += 1)
  {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = !!sptSet[i];

  }

  dist[src] = 0;

  // Find shortest path for all vertices
  for(let count = 0; count < graph.length - 1; count += 1)
  {

    const v = minDist(graph, dist, sptSet)

    sptSet[v] = !sptSet[v];

    for (let count = 0; count < graph.length; count += 1) {
      if (!sptSet[count]
        && graph[count][v] !== 0
        && dist[count] !== Number.MAX_VALUE
        && dist[count] + graph[count][v] < dist[v])
      {
        dist[v] = dist[count] + graph[count][v];
      }
    }



  }
}

function minDist(graph: string | any[], dist: number[], sptSet: boolean[]): number {

  let min = Number.MAX_VALUE;
  let minIndex = -1;

  for(let i = 0; i < graph.length; i += 1)
  {
    if (!sptSet[i] && dist[i] <= min)
        min = dist[i];
        minIndex = i;
  }
  return minIndex;
}

dijkstra(graph, 0);
