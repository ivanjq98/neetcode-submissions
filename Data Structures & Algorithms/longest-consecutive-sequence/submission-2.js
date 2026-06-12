class Solution {
// T: O(n^2)
// S: O(n)
    longestConsecutive(nums) {
        let res = 0 
        let dic = new Set(nums)

        for (let i = 0; i < nums.length; i++)
        {
            let streak = 0, curr = nums[i]
            while (dic.has(curr))
            {
                streak++
                curr++
            }
            res = Math.max(res, streak)
        } 

        return res
    }
}
