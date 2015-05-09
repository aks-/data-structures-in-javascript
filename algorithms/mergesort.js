var mergeSort = function(array) {
    var first = 0;
    var last = array.length;
    if (array.length <= 1) return array;
    var middleIndex = partition(array);
    var leftPart = mergeSort(array.slice(first, middleIndex));
    var rightPart = mergeSort(array.slice(middleIndex, last));
    return merge(leftPart, rightPart);
}

function partition(array) {
    return Math.floor(array.length / 2)
}

function merge(leftPart, rightPart) {
    var leftLength = leftPart.length,
        rightLength = rightPart.length,
        i = 0,
        j = 0,
        auxilaryArray = [];

    while (i < leftLength && j < rightLength) {
        leftPart[i] < rightPart[j] ?
            auxilaryArray.push(leftPart[i++]) :
            auxilaryArray.push(rightPart[j++]);
    }

    while (i < leftLength) {
        auxilaryArray.push(leftPart[i++]);
    }

    while (j < rightLength) {
        auxilaryArray.push(rightPart[j++]);
    }
    return auxilaryArray;
}

module.exports = function () {
    return mergeSort(array);
};
