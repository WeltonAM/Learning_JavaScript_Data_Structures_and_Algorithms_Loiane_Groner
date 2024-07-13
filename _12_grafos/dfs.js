import { Colors } from "../utils";

export default depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GRAY;
    if (callback) {
        callback(u);
    }

    const neighbors = adjList.get(u);

    for (let i = 0; i < neighbors.length; i++) {
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(neighbors[i], color, adjList, callback);
        }
    }

    color[u] = Colors.BLACK;
}