class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        return Number(((nums.length)*(nums.length + 1))/2 - nums.reduce((acc, curr) => acc + curr, 0))
    }
}
