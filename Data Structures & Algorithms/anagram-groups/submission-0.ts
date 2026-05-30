// T: O(m*n*26)
// S: O(n)

class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const anagram: Record<string, string[]> = {};

        const baseCode = 'a'.charCodeAt(0);

        for (const s of strs) {
            const count = new Array(26).fill(0);

            for (const c of s) {
                count[c.charCodeAt(0) - baseCode]++;
            }

            const key = count.join(',');

            if (!anagram[key]) {
                anagram[key] = [];
            }

            anagram[key].push(s);
        }

        return Object.values(anagram);
    }
}