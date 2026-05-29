// T: O(n)
// S: O(n)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
    let store = new Map<number, number>()

    for (let i = 0; i < nums.length; i++)
    {
        let diff = target - nums[i]
        if (store.has(diff))
            return [store.get(diff), i]
            
        store.set(nums[i], i)
    }

    return []
    }
}
