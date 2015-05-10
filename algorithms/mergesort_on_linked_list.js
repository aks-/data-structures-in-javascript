var doublyLinkedList = require('../data-structures/doubly_linked_list');

function sort() {
    return mergeSort(this._first, this._last);
}

function mergeSort(first, last) {
    if (first == null) return null;

    if (first == last) return {
        item: first.item,
        next: null,
        prev: null
    }

    var middle = partition(first, last);
    var leftPart = mergeSort(first, middle);
    var rightPart = mergeSort(middle.next, last);
    return merge(leftPart, rightPart);
}

function partition(first, last) {
    while (first != last && first.next != last) {
        first = first.next;
        last = last.prev;
    }
    return first;
}

function merge(leftPart, rightPart) {
    var auxiliaryList = null;

    while (leftPart != null && rightPart != null) {
        var item;
        if (leftPart.item < rightPart.item) {
            item = leftPart.item;
            leftPart = leftPart.next;
        }else{
            item = rightPart.item;
            rightPart = rightPart.next;
        }
        auxiliaryList = {
            item: item,
            next: null,
            prev: auxiliaryList
        };
    }

    var rest = leftPart != null? leftPart : rightPart;

    while (rest != null) {
        auxiliaryList = {
            item: rest.item,
            next: null,
            prev: auxiliaryList
        };
        rest = rest.next;
    }

    while(auxiliaryList != null && auxiliaryList.prev != null){
        auxiliaryList.prev.next = auxiliaryList;
        auxiliaryList = auxiliaryList.prev;
    }
    return auxiliaryList;
}

function print(node) {
    while (node != null) {
        console.log(node.item);
        node = node.next;
    }
}
