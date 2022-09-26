"use strict";
exports.__esModule = true;
// return the index of the target
function linear_search(haystack, needle) {
    for (var i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle)
            return i;
    }
    // not found
    return -1;
}
exports["default"] = linear_search;
