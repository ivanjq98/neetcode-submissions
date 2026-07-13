class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let unique = new Set(nums)
        return unique.size != nums.length
    }
}
