var Queue = require('../queue');

var BFS = module.exports = function(graph, start, process) {
  if (!this instanceof BFS) {
    return new BFS(graph, start, process);
  }
  // level of traversal
  this.level = 0;

  // Queue to keep neighbor nodes
  this.Q = new Queue();

  this.graph = graph;
  this.start = start;
  this.process = process;

  this.traverse();
}

BFS.prototype.traverse = function() {
  // nodes that have been visited
  var visited = [];
  var Q = this.Q;
  var start = this.start;
  var graph = this.graph;

  // Enqueue the starting node of graph
  Q.enqueue(start);

  while (Q.length > 0) {
    var current = Q.dequeue().item;

    //do operation on node of the graph
    if (visited.indexOf(current) == -1) {
      this.process(current);
    }

    //push the processed node to visited
    visited.push(current);

    var neighbors = (graph.get(current) || []);

    //for each neighbor of current node check if neighbor node
    //is processed or not. If it is, ignore otherwise push it queue
    //to process in next iteration
    neighbors.forEach(function(neighbor, index) {
      if (visited.indexOf(neighbor) == -1) {
        Q.enqueue(neighbor);
      }
    });
  }

  return;
};
