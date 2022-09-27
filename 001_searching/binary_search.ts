// return the index of the target
export default function binary_search(haystack: number[], needle: number): number {
    let low = 0, high = haystack.length

    do {
        let mid = Math.floor(low + (high - low) / 2)
        let midValue = haystack[mid]

        if (needle === midValue) return mid
        else if (needle > midValue) low = mid + 1
        else high = mid
    } while(low < high)

    // not found
    return -1;
}