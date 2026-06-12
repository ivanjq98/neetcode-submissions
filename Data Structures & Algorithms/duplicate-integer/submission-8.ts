class Solution {
    // T: O(n)
    // S: O(n)
    hasDuplicate(nums: number[]): boolean {
        let unique = new Set(nums)

        return unique.size != nums.length
    }
}
