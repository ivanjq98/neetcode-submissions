class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let res = new Map<string, string[]>();
        let baseCode = 'a'.charCodeAt(0)

        for (const word of strs)
        {
            let count = new Array(26).fill(0)
            
            for (const letter of word){
                count[letter.charCodeAt(0) - baseCode]++
            }
            
            let key: string = count.join(',').toString();
            // if does not exist 
            if (!res[key])
                res[key] = []
            
            res[key].push(word)
        }

        return Object.values(res)
    }
}
