var BST = function() {
  this._root = null;
}

BST.prototype = {
  add: function(item) {
    var node = {
      item: item,
      right: null,
      left: null
    }

    var current = this._root;

    while (true) {
      if (this._root == null) {
        this._root = node;
        break;
      }

      if (current.item > item) {
        if (current.left == null) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else if (current.item < item) {
        if (current.right == null) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      } else {
        break;
      }
    }
  },

  inOrder: function(node, fn) {
    if (node.left != null) {
      this.inOrder(node.left, fn);
    }
    fn.call(node);
    if (node.right != null) {
      this.inOrder(node.right, fn);
    }
  },

  postOrder: function(node, fn) {
    if (node.left != null) {
      this.postOrder(node.left, fn);
    }
    if (node.right != null) {
      this.postOrder(node.right, fn);
    }
    fn.call(node);
  },

  preOrder: function(node, fn) {
    fn.call(node);
    if (node.left != null) {
      this.postOrder(node.left, fn);
    }
    if (node.right != null) {
      this.postOrder(node.right, fn);
    }
  }
}

module.exports = BST;
