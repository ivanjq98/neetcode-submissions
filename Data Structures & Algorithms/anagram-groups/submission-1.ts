class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let dic = new Map<string, string[]>()

        for (const s of strs)
        {
            let count = Array(26).fill(0)
            const baseCode = 'a'.charCodeAt(0)
            for (const c of s)
            {
                count[c.charCodeAt(0) - baseCode]++
            }

            const key = count.join(',')

            if (!dic[key])
                dic[key] = []
            
            dic[key].push(s)
        }
        return Object.values(dic)
        
    }
}
