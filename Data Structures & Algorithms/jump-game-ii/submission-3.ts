class Solution {
// Greedy Algorithm (Breadth First Search)
// T: O(n)
// S: O(1)
    jump(nums: number[]): number {
        let res = 0, l = 0, r= 0

        while (r < nums.length - 1) {
            let furthest = 0;
            for (let i = l; i <= r; i++)
                furthest = Math.max(furthest, i + nums[i])

            l = r + 1
            r = furthest
            res++
        }
        return res
    }
}
