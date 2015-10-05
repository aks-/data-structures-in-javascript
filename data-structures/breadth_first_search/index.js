var Queue = require('../queue');

var BFS = function(graph, start, process) {
  // level of traversal
  this.level = 0;

  // Queue to keep neighbor nodes
  this.Q = new Queue();

  // nodes that have been visited
  this.visited = [];

  this.graph = graph;
  this.start = start;
  this.process = process;

  this.traverse();
};

BFS.prototype.traverse = function() {
  var Q = this.Q;

  // Enqueue the starting node of graph
  Q.enqueue(start);

  while (Q.length() > 0) {
    var current = Q.dequeue();
    if (!current) {
      return;
    }
    
    this.process(current);
    var neighbors = G[current];
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      Q.enqueue(neighbor);
    }
  }

  return;
};
