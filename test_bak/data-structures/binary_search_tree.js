var BST = require('../../data-structures/binary_search_tree.js');

var tr = new BST();
tr.add(5);
tr.add(3);
tr.add(6);
tr.add(4);
tr.add(7);

function testContains() {
    if (this.contains(4) == true && this.contains(3) == true && this.contains(-3) == false && this.contains(9) == false) {
        return 'contains method works as expected';
    } else
    {
        return 'Something is wrong with contains method';
    }
}

function preOrderTraversal() {
    var traversalOutput = [];
    this.preOrder(this._root, function(){
        traversalOutput.push(this.item);
    });
    return traversalOutput;
}

function postOrderTraversal() {
    var traversalOutput = [];
    this.postOrder(this._root, function(){
        traversalOutput.push(this.item);
    });
    return traversalOutput;
}

function inOrderTraversal() {
    var traversalOutput = [];
    this.inOrder(this._root, function(){
        traversalOutput.push(this.item);
    });
    return traversalOutput;
}
