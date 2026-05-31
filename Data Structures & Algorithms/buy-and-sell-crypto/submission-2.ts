class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice : number = Infinity
        let Profit : number = 0 

        for (const c of prices)
        {
            if (c < minPrice)
                minPrice = c
            
            Profit = Math.max(Profit, c - minPrice)
        }

        return Profit
    }
}
