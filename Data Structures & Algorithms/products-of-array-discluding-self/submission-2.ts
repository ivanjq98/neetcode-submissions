class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length
        let ans = Array(n)

        for (let i = 0; i < nums.length; i++)
        {
            let prod = 1
            for (let j = 0; j < nums.length; j++)
            {
                if (j != i)
                    prod *= nums[j]
                
            }
            ans[i] = prod
        }

        return ans
    }
}
