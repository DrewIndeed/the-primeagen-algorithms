"use strict";
exports.__esModule = true;
var linear_search_1 = require("./linear_search");
var binary_search_1 = require("./binary_search");
var two_crystal_balls_1 = require("./two_crystal_balls");
// use linear_search
console.log((0, linear_search_1["default"])([1, 2, 3, 4], 4));
console.log((0, linear_search_1["default"])([1, 2, 3, 4], 12));
// use binary_search
console.log((0, binary_search_1["default"])([1, 2, 3, 4], 4));
console.log((0, binary_search_1["default"])([1, 2, 3, 4], 12));
// use two_crystal_balls
console.log((0, two_crystal_balls_1["default"])([0, 0, 0, 0, 1, 1, 1, 1, 1]));
console.log((0, two_crystal_balls_1["default"])([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]));
