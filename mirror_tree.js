var bst = require('./binary_search_tree.js');

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
