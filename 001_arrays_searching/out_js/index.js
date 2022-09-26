"use strict";
exports.__esModule = true;
var linear_search_1 = require("./linear_search");
var binary_search_1 = require("./binary_search");
// use linear_search
console.log((0, linear_search_1["default"])([1, 2, 3, 4], 4));
console.log((0, linear_search_1["default"])([1, 2, 3, 4], 12));
// use binary_search
console.log((0, binary_search_1["default"])([1, 2, 3, 4], 4));
console.log((0, binary_search_1["default"])([1, 2, 3, 4], 12));
