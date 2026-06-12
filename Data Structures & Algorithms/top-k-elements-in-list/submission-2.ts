class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let dic = new Map<number, number>()

        for (let num of nums)
        {
            dic.set(num, (dic.get(num) ?? 0) + 1)
        }

        return Array.from(dic.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => num)
    }
}
