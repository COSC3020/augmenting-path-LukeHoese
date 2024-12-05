function augmentingPath(graph, start, end) {
    // use a queue to store paths visited
    let queue = [];
    // mark nodes as visited by adding them to a set
    let marked = new Set();

    // first path visited is the start node to the start node
    queue.push([start]);
    // mark our start as visited
    marked.add(start);

    // loop over all paths in queue
    while (queue.length > 0) {
        // get our current path from front of the queue
        let currentPath = queue.shift();
        // set current node to be the last node in current path
        let currentNode = currentPath[currentPath.length - 1];

        // if our current node is desired end node, return our augmenting path
        if (currentNode == end) {
            return currentPath;
        }

        // ensure that current node actually exists
        if (graph[currentNode]) {
            // loop over all neighbors to our current node
            for (let neighbor in graph[currentNode]) {
                // make sure nodes we check have not yet been marked
                if(!marked.has(neighbor)) {
                    // create a new path consisting of our current path and the neighbor to the last node for each loop
                    let nextPath = [...currentPath, neighbor];
                    // add each new path to our queue
                    queue.push(nextPath);
                    // mark each neighbor added to a path as visited
                    marked.add(neighbor);
                }
            }
        }
    }

    // return empty list if we dont find a path from start to end
    return [];
}