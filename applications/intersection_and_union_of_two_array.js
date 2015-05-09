var sort = require('../algorithms/mergesort.js');

function intersection(array1, array2) {
    var array_1 = sort(array1),
        array_2 = sort(array2),
        i = 0, j = 0,
        result = [],
        len = array_1.length < array_2.length ?
        array_1.length : array_2.length;

    while (i < array_1.length && j < array_2.length) {
        array_1[i] < array_2[j] ? i++ : j++;
        if (array_1[i] == array_2[j]) result.push(array_1[i]);
    }

    return result;
}

function union(array1, array2) {
    var array_1 = sort(array1),
        array_2 = sort(array2),
        i = 0, j = 0, k = -1,
        result = [];

    while (i < array_1.length && j < array_2.length) {
        if (array_1[i] < array_2[j]) {
            if (array_1[i] ==  result[k]) i++;
            else {
                 result.push(array_1[i]);i++; k++;
            }
        } else if (array_1[i] > array_2[j]) {
            if (array_2[j] == result[k]) j++;
            else {
                result.push(array_2[j]);j++; k++;
            }
        } else {
            if (array_1[i] == result[k]) {
                j++; i++
            } else {
                result.push(array_1[i]);j++; i++;
            }
        }
    }

    while (i < array_1.length) {
        if (array_1[i] == result[k]) {
            i++;
        } else {
            result.push(array_1[i]);i++; k++;
        }
    }

    while (j < array_2.length) {
        if (array_2[j] == result[k]) {
            j++;
        } else {
            result.push(array_2[j]);j++; k++;
        }
    }

    return result;
}
