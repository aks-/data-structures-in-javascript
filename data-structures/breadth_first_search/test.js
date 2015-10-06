var test = require('tape');
var G = require('./fixtures/graph').graph;
var start = require('./fixtures/graph').start;
var BFS = require('./index');

test('breadth first search', function(t) {
  var array = [];
  new BFS(G, start, function(node) {
    array.push(node.item);
  });

  t.deepEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'], array);
  t.end();
});

