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
        var found = false,
            current = this._root,
            parent = null;

        while (!found) {
            if (current.item > item) {
                if (current.left != null) {
                    parent = current;
                    current = current.left;
                } else {
                    break;
                }
            } else if (current.item < item) {
                if (current.right != null) {
                    parent = current;
                    current = current.right;
                } else {
                    break;
                }
            } else {
                found = true;
            }
        }

        if (found) {
            var childCount = (current.left == null ? 0 : 1) + (current.right == null ? 0 : 1);
            var replacement = null;
            var replacementParent = null;

            switch(childCount) {
            case 0:
                if (current == this._root) {
                    this._root = null;
                } else {
                    parent.left == current ? parent.left = null : parent.right = null;
                }
                break;
            case 1:
                if (current == this._root) {
                    this._root = current.left == null ? current.right : current.left;
                } else {
                    parent = parent.left == current ?
                        (parent.left = (current.left == null? current.right : current.left))
                    : (parent.right = (current.left == null? current.right : current.left));
                }
                break;
            case 2:
                replacement = current.left;
                while (replacement.right != null) {
                    replacementParent = replacement;
                    replacement = replacement.right;
                }
                if (replacementParent == null) {
                    if (current == this._root) {
                        replacement.right = current.right;
                        this._root = replacement;
                    }
                    else {
                        var isCurrentLeftChild = parent.left == current ? true : false;
                        replacement.right = current.right;
                        isCurrentLeftChild ? parent.left = replacement : parent.right = replacement;
                    }
                } else {
                    replacementParent.right = replacement.left;
                    replacement.left = current.left;
                    replacement.right = current.right;
                    current == this._root ?
                        this._root = replacement
                        : (parent.left == current ? parent.left = replacement : parent.right = replacement)
                }
                break;
            }
            return true;
        } else {
            return false;
        }
    }
}

module.exports = BST;
