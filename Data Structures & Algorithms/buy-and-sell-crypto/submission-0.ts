class Solution {
// T: O(n) 
// S: O(1)

    maxProfit(prices: number[]): number {
        // Check if the array exist 
        if (prices.length == 0)
            return 0
        
        let minPrice : number = Infinity 
        let maxProfit : number = 0

        for (const price of prices) 
        {
            if (price < minPrice)
                minPrice = price
            else
                maxProfit = Math.max(maxProfit, price - minPrice)
        }

        return maxProfit
    };

}
