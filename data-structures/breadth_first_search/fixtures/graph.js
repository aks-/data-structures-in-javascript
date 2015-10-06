var Node = function(item) {
  return {
    item: item,
  }
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C'); 
var D = new Node('D');
var E = new Node('E');
var F = new Node('F');
var G = new Node('G'); 

var graph = exports.graph = new Map();

graph.set(A, [B, C]);
graph.set(B, [A, D]);
graph.set(C, [A]);
graph.set(D, [B, E,F]);
graph.set(E, [D, G]);
graph.set(F, [D, G]);
graph.set(G, [F, G]);

exports.start = A;
