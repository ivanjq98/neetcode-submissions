class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice : number = Infinity
        let bestPrice: number = 0

        for (const c of prices)
        {
            if (minPrice > c)
                minPrice = c
            else
                bestPrice = Math.max(bestPrice, c - minPrice)
        }
        
        return bestPrice
    }
}
