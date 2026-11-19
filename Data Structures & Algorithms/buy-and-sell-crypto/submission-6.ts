class Solution {
    /**
     * T: O(n)
     * S: O(1)
     */
    maxProfit(prices: number[]): number {
        let left : number = 0
        let right : number = 1
        let profit: number = 0

        while (right < prices.length) {
            if (prices[left] < prices[right])
            {
                let currProfit = prices[right] - prices[left]
                profit = Math.max(profit, currProfit)      
            }
            else
            {
                left = right
            }
            right++;
        }
        return profit
    }
}
