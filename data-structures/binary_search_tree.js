var BST = function() {
    //Initialize root node to null while creating BST
    this._root = null;
}

BST.prototype = {
    add: function(item) {
        //Create a new node to add
        var node = {
            item: item,
            right: null,
            left: null
        }

        var current = this._root;

        while (true) {
            // If root node is null i.e., there is no element in the tree then set root to new node
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

    contains: function(item) {
        if (this._root == null) return false;

        var found = false;
        var current = this._root;

        while (current != null) {
            if (current.item > item) {
                if (current.left != null) {
                    current = current.left;
                } else {
                    break;
                }
            } else if (current.item < item) {
                if (current.right != null) {
                    current = current.right;
                } else {
                    break;
                }
            } else {
                found = true;
                break;
            }
        }

        return found;
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
    },

    delete: function(item) {
    }
}

module.exports = BST;
