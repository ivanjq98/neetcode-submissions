class Solution {
    // Space Optimized
    // T: O(n)
    // S: O(1)
    maxSubArray(nums: number[]): number 
    {
        let currSum = nums[0]
        let maxSum = nums[0]

        for (let i = 1; i < nums.length; i++)
        {
            currSum = Math.max(currSum + nums[i], nums[i] )
            maxSum = Math.max(currSum, maxSum)
        }

        return maxSum
    }
}