class Solution {
// T: O(n)
// S: O(n)
    hasDuplicate(nums: number[]): boolean {
        let duplicate = new Set()

        for (const c of nums)
        {
            duplicate.add(c)
        }

        return duplicate.size != nums.length 
    }
}
