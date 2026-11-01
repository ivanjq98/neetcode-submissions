class Solution {
    // // T: 2^n
    // // S: O(n)
    // // Recursion 
    // climbStairs(n: number): number {
    //     const dfs = (i) => {
    //         if (i >= n) return i == n;
    //         return (dfs(i + 1) + dfs(i + 2))
    //     }
    //     return dfs(0)
    // }
    // Dynamic Programming (Space Optimized)
    // T: O(n)
    // S: O(1)
    climbStairs(n: number): number {
        let one = 1
        let two = 1

        for (let i = 0; i < n - 1; i++)
        {
            let temp = one 
            one = one + two 
            two = temp
        }

        return one ;
    }
}
