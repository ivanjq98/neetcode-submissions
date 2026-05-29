// T: O(n)
// S: O(1)

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let store = new Map<number, number>();

        for (let i = 0; i < nums.length; i++)
        {
            if (store.has(nums[i]))
                return true
            store.set(nums[i], i)
        }

        return false
    }
}
