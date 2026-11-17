/**
 * Largest Rectangle in Histogram (LeetCode 84): monotonic increasing stack
 *
 * Idea: for each bar, find the widest rectangle that uses that bar's
 *       height. It extends left and right until it hits a shorter bar.
 *       The stack holds indices whose heights increase from bottom to top.
 *       When the current bar is shorter than or equal to the top, the top
 *       bar can't extend any further right, so pop it and compute its area:
 *         - right boundary = i (the first shorter-or-equal bar to the right)
 *         - left boundary  = the new stack top (the first shorter bar to the left)
 *         - width = i - left - 1, or just i if the stack is now empty
 *       The extra pass at i === n acts as a height-0 sentinel that flushes
 *       every remaining bar off the stack.
 *
 * Time:  O(n). Each index is pushed once and popped at most once.
 * Space: O(n). The stack holds up to n indices (e.g. strictly increasing heights).
 */
class Solution {
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        const stack: number[] = []; // indices, heights increasing
        let maxArea = 0;

        for (let i = 0; i <= n; i++) {
            // At i === n treat the height as 0, so every remaining bar gets popped
            const currHeight = i === n ? 0 : heights[i];

            while (stack.length > 0 && heights[stack[stack.length - 1]] >= currHeight) {
                const height = heights[stack.pop()!];
                const leftBoundary = stack.length === 0 ? -1 : stack[stack.length - 1];
                const width = i - leftBoundary - 1;
                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}