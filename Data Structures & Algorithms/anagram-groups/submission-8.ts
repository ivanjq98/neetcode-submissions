class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      let dic = new Map<string, string[]>()
      
      for (let s of strs)
      {
        let count =  new Array(26).fill(0)
        let baseCode = 'a'.charCodeAt(0)

        for (let i = 0; i < s.length; i++)
        {
            count[s.charCodeAt(i) - baseCode]++
        }

        let key = count.join(',')
        if (!dic[key])
            dic[key] = []
        
        dic[key].push(s)
      }

      return Object.values(dic)
    }
}
