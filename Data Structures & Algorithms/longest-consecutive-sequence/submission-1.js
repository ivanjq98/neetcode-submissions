class Solution {
// T: O(n^2)
// S: O(n)
    longestConsecutive(nums) {
        let res = 0
        let unique = new Set(nums)

        for (let num of nums)
        {
            let curr = num, streak = 0
            while (unique.has(curr))
            {
                streak++
                curr++
            }
            res = Math.max(res, streak)
        }
        return res
    }
}
