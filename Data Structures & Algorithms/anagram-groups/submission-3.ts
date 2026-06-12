class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let dic = new Map <string, string[]>()

        for (let c of strs)
        {
            let count = Array(26).fill(0)
            const baseCode = 'a'.charCodeAt(0)

            for (let i = 0; i < c.length; i++)
            {
                count[c.charCodeAt(i) - baseCode]++
            }

            let key = count.join(',')
            
            if (!dic[key])
            {
                dic[key] = []
            }

            dic[key].push(c)
        }


        return Object.values(dic)
    }
}
