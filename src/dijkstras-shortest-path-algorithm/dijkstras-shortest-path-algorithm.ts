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

function dijkstra(graph, src)
{
  let dist: number[] = [];
  let sptSet: number[] = [];

  for(let i = 0; i < graph.length; i++)
  {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = Number(false);
  }

  dist[src] = 0;

  // Find shortest path for all vertices
  for(let count = 0; count < graph.length; count++)
  {

  }
}

function minDist(dist,sptSet): number {

  let min = Number.MAX_VALUE;
  let min_index = 0;

  for(let i = 0; i < graph.length; i += 1)
  {
    console.log('!sptSet', !sptSet)

    if (!sptSet && dist[i] <= min) {

    }
  }
}
