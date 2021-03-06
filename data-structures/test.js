var test = require('tape');
var Queue = require('./queue');

test('Enqueue should add a node to queue', function(t) {
  var Q = new Queue();
  var elements = Q.length;
  t.equal(0, elements);

  Q.enqueue('one');
  Q.enqueue('two');

  var elementsAfterEnqueue = Q.length;
  t.equal(2, elementsAfterEnqueue, 'Enqueued successful');
  t.end();
});

test('Queue should remove the element from head', function(t) { 
  var Q = new Queue();
  var elements = Q.length;

  t.equal(0, elements);

  Q.enqueue('one');
  Q.enqueue('two');
  
  var elementsAfterEnqueued = Q.length;
  t.equal(2, elementsAfterEnqueued);

  var dequeuedItem = Q.dequeue().item;
  t.equal('one', dequeuedItem);
  var elementsAfterDequeued = Q.length;
  t.equal(1, elementsAfterDequeued, 'Dequeued successful');
  t.end();
});
