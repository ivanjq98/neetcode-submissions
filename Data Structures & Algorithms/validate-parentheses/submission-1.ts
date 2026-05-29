class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // 1. Properly initialize and populate the Map
        let bracket = new Map<string, string>([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]);

        let stack : string[] = [];

        for (const c of s)
        {
            if (c == "[" || c == "(" || c == "{")
                stack.push(c);
            else
            {
                if (stack.length == 0)
                    return false;
                
                const pop = stack.pop();
                // 2. Map lookup works perfectly here now
                if (pop !== bracket.get(c))
                    return false;
            }
        }

        return stack.length == 0;
    }
}
