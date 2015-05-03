var bst = require('./binary_search_tree.js');

bst.prototype.postOrder = function(node, fn) {
  if (node.left != null) this.postOrder(node.left, fn);
  if (node.right != null) this.postOrder(node.right, fn);
  fn.call(node);
}

bst.prototype.traversePostorder = function() {
  this.postOrder(this._root, function() {
    console.log(this.item);
  });
}

bst.prototype.mirrorMe = function() {
  this.postOrder(this._root, function() {
    var temp = this.left;
    this.left = this.right;
    this.right = temp;
  });
}

