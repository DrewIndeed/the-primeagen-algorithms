"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SWEET TIP FROM LEETCODE, WRITE OUT THE DIRECTIONS
const DIRECTIONS = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0], // left
];
function walk(maze, wall, curr, // current position that we are at
end, // end point to know that we have solved the maze
seen, // map to check if a location has been walked or not
path // target path we need to build
) {
    // BASE CASE
    // 1. if the location is off the map
    if (curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length)
        return false;
    // 2. if meet a wall, a char that represent the wall
    if (maze[curr.y][curr.x] === wall)
        return false;
    // 3. if the end is reached
    if (curr.x === end.x && curr.y === end.y) {
        // NEED THIS LINE, since when recursion is done
        // the curr will go right out of the map
        path.push(end);
        return true;
    }
    // 4. if an old step is reached
    if (seen[curr.y][curr.x])
        return false;
    // ------------------------------
    // 3 RECURSIVE CASEs
    // PRE
    // 1. push in the start, to establish the path
    seen[curr.y][curr.x] = true; // update the seen map
    path.push(curr);
    // DURING
    for (let i = 0; i < DIRECTIONS.length; i++) {
        // For the 3rd param we need a new current. what is it?
        // It is the direction that we choose
        const [x, y] = DIRECTIONS[i];
        const newCurr = { x: curr.x + x, y: curr.y + y };
        // recure here
        // meaning: waling until we reached the end point
        // meaning this function returns true
        if (walk(maze, wall, newCurr, end, seen, path))
            return true;
    }
    // POST
    // 3. pop if meet a dead end and cannot go further
    path.pop();
    // if we recure and we reach the end, but we cannot find our end point
    return false;
}
// return list of coordinates or Points that solves the maze
function maze_solver(maze, // list of string to represent the maze
wall, // item to represent the limits of the maze
start, // starting point
end // finish point
) {
    const seen = [];
    const path = [];
    // populate seen 2d array
    for (let i = 0; i < maze.length; i++)
        seen.push(new Array(maze[0].length).fill(false));
    // walking
    walk(maze, wall, start, end, seen, path);
    // completed path
    return path;
}
exports.default = maze_solver;
