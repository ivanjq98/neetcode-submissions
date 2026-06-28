class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length)
        {
            return false
        }
        let baseCode = 'a'.charCodeAt(0)
        let count = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++)
        {   
            count[s.charCodeAt(i) - baseCode]++
            count[t.charCodeAt(i) - baseCode]--
        }
        return count.every(c => c == 0)
    }
}
