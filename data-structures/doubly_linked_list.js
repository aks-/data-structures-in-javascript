var doublyLinkedList = function() {
    this._first = null;
    this._last = null;
}

doublyLinkedList.prototype = {
    add: function(item) {
        var node = {
            item: item,
            next: null,
            prev: null
        }

        if (this._first == null) {
            this._first = node;
            this._last = node;
        } else {
            this._first.prev = node;
            node.next = this._first;
            this._first = node;
        }
    },

    toString: function() {
        var current = this._first;
        var results = [];
        while (current != null) {
            results.push(current.item);
            current = current.next;
        }
        return results;
    }
}

module.exports = doublyLinkedList;
