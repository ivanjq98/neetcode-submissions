class Solution {
// T: O(n)
// S: O(1)
    hasDuplicate(nums: number[]): boolean {
        let duplicate = new Set(nums)
        return duplicate.size != nums.length
    }
}
