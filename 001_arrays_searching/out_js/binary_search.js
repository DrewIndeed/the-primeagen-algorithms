"use strict";
exports.__esModule = true;
// return the index of the target
function binary_search(haystack, needle) {
    var low = 0, high = haystack.length;
    do {
        var mid = Math.floor(low + (high - low) / 2);
        var midValue = haystack[mid];
        if (needle === midValue)
            return mid;
        else if (needle > midValue)
            low = mid + 1;
        else
            high = mid;
    } while (low < high);
    // not found
    return -1;
}
exports["default"] = binary_search;
