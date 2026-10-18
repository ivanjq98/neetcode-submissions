class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    // Dynamic Programming (Space Optimized)
    // T: O(n)
    // S: O(1)
    minCostClimbingStairs(cost: number[]): number {
        for (let i = cost.length - 3; i >= 0; i--)
        // minus 3 because we are seeing the last 2 index of the position because there is a possibility you can jump 2 of the last 2 index to the goal 
        {
            cost[i] += Math.min(cost[i+1], cost[i+2])
        }
        return Math.min(cost[0], cost[1])
    }
}
