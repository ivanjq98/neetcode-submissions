class Solution {
    // T: O(n)
    // S: O(n)
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length - 1
        let minHeight = 0
        let area = 0

        while (right > left)
        {
            minHeight = Math.min(heights[left], heights[right])

            if (heights[left] > heights[right])
                right--
            else
                left++
            
            area = Math.max(area, minHeight * (right - left + 1))
        }

        return area
    }
}
