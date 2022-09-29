"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maze_solver_1 = require("./maze_solver");
const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];
console.log((0, maze_solver_1.default)(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 }));
