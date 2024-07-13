const INF = Number.MAX_SAFE_INTEGER;

const dijkstra = (graph, src) => {
    const dist = [];
    const visited = [];
    const { length } = graph;

    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }

    dist[src] = 0;

    for (let i = 0; i < length - 1; i++) {
        const u = minDistante(dist, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    return dist;
}