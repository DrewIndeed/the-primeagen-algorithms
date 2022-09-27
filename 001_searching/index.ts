import linear_search from "./linear_search";
import binary_search from "./binary_search";
import two_crystal_balls from './two_crystal_balls'

// use linear_search
console.log(linear_search([1,2,3,4], 4));
console.log(linear_search([1,2,3,4], 12));

// use binary_search
console.log(binary_search([1,2,3,4], 4));
console.log(binary_search([1,2,3,4], 12));

// use two_crystal_balls
console.log(two_crystal_balls([0,0,0,0,1,1,1,1,1]));
console.log(two_crystal_balls([0,0,0,0,0,0,0,1,1,1,1]));