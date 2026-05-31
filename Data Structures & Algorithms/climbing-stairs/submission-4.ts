class Solution {
// T: O(n)
// S: O(1)
   climbStairs(n: number): number {
    if (n <= 2) return n;

    let a = 1; // ways to reach step 1
    let b = 2; // ways to reach step 2

    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }

    return b;
}
}
