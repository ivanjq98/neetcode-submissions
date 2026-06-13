class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let res = new Map<string, string[]>

        for (let s of strs)
        {
            let count = Array(26).fill(0)
            const baseCode = 'a'.charCodeAt(0)
            for (let i = 0; i < s.length; i++)
            {
                count[s.charCodeAt(i) - baseCode]++
            }

            let key = count.join(',')

            if (!res[key])
            {
                res[key] = []
            }

            res[key].push(s)
        }

        return Object.values(res)
    }
}
