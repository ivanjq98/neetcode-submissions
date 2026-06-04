// T: O(n)
// S: O(1)

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length)
            return false 

        const baseCode = 'a'.charCodeAt(0)
        let count = Array(26).fill(0)
        
        for (let i = 0; i < s.length; i++)
        {
            count[s.charCodeAt(i) - baseCode]++
            count[t.charCodeAt(i) - baseCode]--
        }

        return count.every(( c => c == 0))
    }
}




