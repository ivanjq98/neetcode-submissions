/**
 * Daily Temperatures (LeetCode 739): monotonic decreasing stack
 *
 * Idea: the stack holds days that are still waiting for a warmer day.
 *       Temperatures on the stack are decreasing from bottom to top.
 *       When today is warmer than the top, today is that day's answer,
 *       so pop it and record the gap in days.
 *
 * Time:  O(n). Each index is pushed once and popped at most once,
 *        so the inner while loop runs at most n times in total,
 *        not n times per iteration.
 * Space: O(n). In the worst case (strictly decreasing temps),
 *        every day stays on the stack. The result array is also O(n).
 */
 class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        const res: number[] = new Array(temperatures.length).fill(0);
        const stack: [number, number][] = []; // [temp, index]

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];

            // Today is warmer than the waiting day on top: resolve it
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [, prevIndex] = stack.pop()!;
                res[prevIndex] = i - prevIndex;
            }

            stack.push([t, i]);
        }

        // Days left on the stack never got a warmer day, so they stay 0
        return res;
    }
}