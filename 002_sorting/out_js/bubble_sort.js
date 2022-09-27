"use strict";
exports.__esModule = true;
function bubble_sort(arr) {
    for (var i = 0; i <= arr.length - 1; ++i) {
        for (var j = 0; j <= arr.length - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
exports["default"] = bubble_sort;
