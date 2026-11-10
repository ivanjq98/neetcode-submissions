class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length)
            return false

        let count = new Array(26).fill(0)
        let baseCode = 'a'.charCodeAt(0)

        for (let i = 0; i <= s.length - 1; i++)
        {
            count[s.charCodeAt(i) - baseCode]++
            count[t.charCodeAt(i) - baseCode]--
        }

        return count.every(c => c == 0)
    }
}
