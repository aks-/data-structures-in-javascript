//Find the pythagorean triplets such that a^2 + b^2 = c^2
var sort = require('../algorithms/mergesort.js');

function isPythagorean(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }

    var sortedArray = sort(array),
        k = sortedArray.length - 1,
        j = k - 1,
        i = 0,
        found = false;
    console.log(sortedArray);
    while (k > 0) {
        if (i != j) {
            var leftOfExp = sortedArray[i] + sortedArray[j];
            var rightOfExp = sortedArray[k];
            if (leftOfExp < rightOfExp) i++;
            else if (leftOfExp > rightOfExp) j--;
            else {
                found = true;
                break;
            }
        } else {
            k--;
            i = 0;
            j = k - 1;
        }
    }
    return found;
}
