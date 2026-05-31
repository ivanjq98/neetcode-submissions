class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0
        let right : number = heights.length - 1
        let maxArea = 0;

        for (let i = 0; heights[i]; i++)
        {
            let minHeight = Math.min(heights[left], heights[right])

            if (heights[right] > heights[left])
                left++
            else
                right--

            maxArea = Math.max(minHeight * (right - left + 1), maxArea)
        }

        return maxArea
    }
}
