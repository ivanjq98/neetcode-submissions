class Solution {
   // T: O(n)
   // S: O(n)
    twoSum(nums: number[], target: number): number[] {
        let dic = new Map<number, number>()

        for (let i = 0 ; i < nums.length; i++)
        {
            const diff = target - nums[i]
            if (dic.has(diff))
            {
                return [dic.get(diff), i]
            }
            dic.set(nums[i], i)
        }
        return []

    }
}
