var LinkedList = function() {
    this._first = null;
    this._last =null;
}

LinkedList.prototype = {
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

        while (current != null) {
            console.log(current.item);
            current = current.next;
        }
    }
}

var ll = new LinkedList();
ll.add('Some');
ll.add('thing');
ll.add('is');
ll.add('wrong');
ll.toString();
