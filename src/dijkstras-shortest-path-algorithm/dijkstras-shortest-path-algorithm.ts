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
  let sptSet: number[] = [];

  for(let i = 0; i < graph.length; i += 1)
  {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = 0;
  }

  dist[src] = 0;

  // Find shortest path for all vertices
  for(let count = 0; count < graph.length - 1; count += 1)
  {

    const u = minDist(dist, sptSet)

    // console.log("u", u);

  }
}

function minDist(dist: number[], sptSet: number[]): number {

  let min = Number.MAX_VALUE;
  let minIndex = -1;

  for(let i = 0; i < graph.length; i += 1)
  {
    if (!sptSet[i] && dist[i] <= min)
        min = dist[i];
        minIndex = i;
        console.log(':::::::', { min,
          minIndex
        });
  }
  return minIndex;
}

dijkstra(graph, 0);
