const kruskal = graph => {
    const { length } = graph;
    const parent = [];
    const ne = 0;
    let a; let b; let u; let v;
    const cost = initializeCost(graph);

    while (ne < length - 1) {
        for (let i = 0, min = INF; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;
                }
            }
        }

        u = find(u, parent);
        v = find(v, parent);

        if (union(u, v, parent)) {
            ne++;
        }

        cost[a][b] = cost[b][a] = INF;
    }

    return parent;
}