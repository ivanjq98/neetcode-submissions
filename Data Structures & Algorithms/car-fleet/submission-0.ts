/**
 * Car Fleet (LeetCode 853): sort + stack of arrival times
 *
 * Idea: process cars from closest to the target to farthest.
 *       Work out each car's arrival time = (target - position) / speed.
 *       A car behind can never pass the car ahead. If it would arrive
 *       sooner or at the same time, it catches up and joins that fleet,
 *       so it moves at the fleet's speed and doesn't start a new fleet.
 *       The stack holds one arrival time per fleet. These times strictly
 *       increase from bottom to top.
 *
 * Time:  O(n log n). The sort dominates; the loop itself is O(n).
 * Space: O(n). The pairs array, plus the stack in the worst case
 *        (no cars merge, so every car is its own fleet).
 */
 class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        // Pair each car's position with its speed
        const cars: [number, number][] = position.map((p, i) => [p, speed[i]]);

        // Closest to the target first (descending position)
        cars.sort((a, b) => b[0] - a[0]);

        const stack: number[] = []; // arrival time of each fleet
        
        for (const [p, s] of cars) {
            const time = (target - p) / s;

            // If this car arrives no later than the fleet ahead, it catches
            // up and merges. Otherwise it is slower and forms a new fleet.
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length;
    }
}