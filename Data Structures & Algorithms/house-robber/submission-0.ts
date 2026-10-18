// Dynamic Programming (Space Optimized)
// T: O(n)
// S: O(1)
class Solution {
    rob(nums: number[]): number {
        let rob1 = 0;
        let rob2 = 0;
        
        // E.g. [rob1, rob2, n , n+1, ...]
        for (const num of nums)
        {
            const temp = Math.max(num + rob1, rob2)
            rob1 = rob2;
            rob2 = temp
        }
        return rob2
    }
}
