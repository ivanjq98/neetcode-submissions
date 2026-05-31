class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        return (((nums.length) * (nums.length + 1)) / 2 - nums.reduce((acc, curr) => acc + curr, 0))
    }
}
