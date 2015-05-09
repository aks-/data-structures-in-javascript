var bst = require('../data-structures/binary_search_tree.js');

function traverseInOrder() {
  this.inOrder(this._root, function() {
    console.log(this.item);
  });
}

function mirrorMe() {
  this.postOrder(this._root, function() {
    var temp = this.right;
    this.right = this.left;
    this.left = temp;
  });
}

var tr = new bst();
tr.add(5);
tr.add(3);
tr.add(6);
tr.add(4);
tr.add(7);

traverseInOrder.call(tr);
mirrorMe.call(tr);
console.log("\n");
traverseInOrder.call(tr);
