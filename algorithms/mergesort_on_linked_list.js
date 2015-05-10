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
    var first = first;
    var last = last;
        while (first != last && first.next != last) {
        first = first.next;
        last = last.prev;
    }
    return first;
}

function merge(leftPart, rightPart) {
    var auxilaryList = null;
    var start;

    while (leftPart != null && rightPart != null) {
        if (leftPart.item < rightPart.item) {
            if (auxilaryList == null) {
                auxilaryList = {
                    item: leftPart.item,
                    next: null,
                    prev: null
                }
                start = auxilaryList;
            } else {
                auxilaryList.next = {
                    item: leftPart.item,
                    next: null,
                    prev: auxilaryList
                }
                auxilaryList = auxilaryList.next;
            }
            leftPart = leftPart.next;
        } else {
            if (auxilaryList == null) {
                auxilaryList = {
                    item: rightPart.item,
                    next: null,
                    prev: null
                }
                start = auxilaryList;
            } else {
                auxilaryList.next = {
                    item: rightPart.item,
                    next: null,
                    prev: auxilaryList
                }
                auxilaryList = auxilaryList.next;
            }
            rightPart = rightPart.next;
        }
    }

    while (leftPart == null && rightPart != null) {
        if (auxilaryList == null) {
            auxilaryList = {
                item: rightPart.item,
                next: null,
                prev: null
            }
            start = auxilaryList;
        } else {
            auxilaryList.next = {
                item: rightPart.item,
                next: null,
                prev: auxilaryList
            }
            auxilaryList = auxilaryList.next;
        }
        rightPart =rightPart.next;
    }

    while (rightPart == null && leftPart != null) {
        if (auxilaryList == null) {
            auxilaryList = {
                item: leftPart.item,
                next: null,
                prev: null
            }
            start = auxilaryList;
        } else {
            auxilaryList.next = {
                item: leftPart.item,
                next: null,
                prev: auxilaryList
            }
            auxilaryList = auxilaryList.next;
        }
        leftPart = leftPart.next;
    }

    return start;
}

function print(node) {
    while (node != null) {
        console.log(node.item);
        node = node.next;
    }
}
