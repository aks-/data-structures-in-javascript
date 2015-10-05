var Queue = module.exports = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

Queue.prototype.enqueue = function(item) {
  var Node = function(item) {
    this.item = item;
    this.next = null;
  };

  //create a new node when adding
  var newNode = new Node(item);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
  ++this.length;
  return;
};

Queue.prototype.dequeue = function() {
  if (!this.head) {
    return null;
  }

  var temp = this.head;
  this.head = this.head.next;
  --this.length;
  return temp;
};

Queue.prototype.size = function() {
  return this.length;
};
