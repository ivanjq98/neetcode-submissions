class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    // Two pointers and recurisive algorithem
    longestPalindrome(s: string): string {
        const n = s.length 

        if (n < 2) return s;

        const dp: boolean[][] = Array.from( {length: n }, () => Array(n).fill(false))

        let start = 0
        let maxLength = 1

        for (let i = 0 ; i < n ; i++)
        {
            dp[i][i] = true
        }

        for (let len = 2; len <= n; len++)
        {
            for (let left = 0; left <= n - len; left++)
            {
                const right = left + len - 1

                if (s[left] === s[right]){
                    if (len === 2 || dp[left + 1][right - 1])
                    {
                        dp[left][right] = true

                        if (len > maxLength)
                        {
                            start = left
                            maxLength = len
                        }
                    }
                }
            }
        }
        return s.substring(start, start + maxLength)

    }
}
