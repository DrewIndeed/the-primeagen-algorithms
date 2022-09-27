/*
Another form of this exercise: lets say there is a 100 floors buiding, and you have 2 crystal balls, find the flloor where a crystal ball would break from that floor forward in the most optimized way
*/

// return the index of the target
export default function two_crystal_balls(floors: number[]): number {
    let jumpAmount = Math.floor(Math.sqrt(floors.length))
    let jumpingNeedle = jumpAmount

    // 1. Go up sqrt(N) flloors until ball 1 breaks
    for (; jumpingNeedle < floors.length; jumpingNeedle += jumpAmount) {
        // if the status of that floor is 1, meaning that ball 1 breaks
        if (floors[jumpingNeedle]) break;
    }

    // 2. Go down sqrt(N) floors to the last known floor right before ball 1 breaks
    jumpingNeedle -= jumpAmount

    // 3. Go up floor by floor until ball 2 breaks
    // keep looping if the number of single flloor (j) is still less than the jump amount or portion
    // and the jumpingNeedle is still in the array indexes
    for (
        let singleFloor = 0; 
        singleFloor < jumpAmount && jumpingNeedle < floors.length; 
        ++singleFloor, ++jumpingNeedle
    ) {
        // if the status of that floor is 1, meaning that ball 2 breaks
        // return the floor position
        if (floors[jumpingNeedle]) return jumpingNeedle
    }

    // not found
    return -1;
}