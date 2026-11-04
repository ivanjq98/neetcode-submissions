class Solution {
    // T: O(n*a)
    // S: O(a)
    change(amount: number, coins: number[]): number {
        // Let dp be the number of amount 
        const dp = new Array(amount + 1).fill(0)
        // Empty amount still return 1 way
        dp[0] = 1
        // Iterate on how many kind of coins I have 
        for (let i = coins.length -1 ; i >= 0; i--)
        {
            // Check on every each amount starting from 1 
            for (let a = 1; a <= amount; a++)
            {
                dp[a] += coins[i] <= a ? dp[a-coins[i]] : 0 
            }
        }

        return dp[amount]
    }
}
