###
Breadth First Search implemented in a way that you can send in the kind of process you want to execute on each node in graph.

## API:

```js
BFS(Graph, start, process);
```
- Graph: graph represented explicitly as an adjacency list.
- start: starting node in graph from which you want to start traversing graph.
- process: process is a function which takes node as it's argument, that you want to execute on each node.

## Overview example

```js
BFS(G, start, function(node) {
  console.log(node.item);
});
```

