class Solution {
    // T: O(n^2)
    // S: O(n)
    groupAnagrams(strs: string[]): string[][] {
        let ans = new Map<string, string[]>()

        for (let s of strs)
        {
            let baseCode = 'a'.charCodeAt(0)
            let count = Array(26).fill(0)

            for (let i = 0; i < s.length; i++)
            {
                count[s.charCodeAt(i) - baseCode]++
            }

            let keys = count.join(',')

            if (!ans[keys])
            {
                ans[keys] = []
            }

            ans[keys].push(s)

        }

        return Object.values(ans)
    }
}
