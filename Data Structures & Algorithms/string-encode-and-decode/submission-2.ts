class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
       const res = []
       for (let c of strs)
       {
            res.push(String(c.length), "#", c)
       }
       return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [], i = 0
        while (i < str.length)
        {
            let j = i 
            while (str[j] !== "#")
            {
                j++
            }
            let length = parseInt(str.substring(i, j))
            i = j + 1
            j = i + length
            res.push(str.substring(i, j))
            i = j
            
        }
        return res
    }
}
