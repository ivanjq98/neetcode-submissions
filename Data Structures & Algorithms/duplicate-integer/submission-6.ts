class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let unique = new Set()

        for (const c of nums)
        {
            unique.add(c)
        }

        return unique.size != nums.length
    }
}
