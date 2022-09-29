import maze_solver from "./maze_solver";

const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];

console.log(maze_solver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 }));
