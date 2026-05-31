class Solution {
// T: O(n)
// S: O(n)
    hasDuplicate(nums: number[]): boolean {
        let check = new Set();

        for (const c of nums)
        {
            if (check.has(c))
                return true
            
            check.add(c)
        }

        return false
    }
}
