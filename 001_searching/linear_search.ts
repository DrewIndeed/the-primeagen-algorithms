// return the index of the target
export default function linear_search(haystack: number[], needle: number): number {
    for (let i=0;i<haystack.length;++i) {
        if (haystack[i] === needle) return i;
    }
    // not found
    return -1;
}