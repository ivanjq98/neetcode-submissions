class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let bracket = new Map<string, string>([ // let bracket : new Map instead of =
            [")" , "("],
            ["}" , "{"],
            ["]" , "["]
        ]) // : instead of ,

        let stack = []
        for (const c of s)
        {
            if (c == '(' || c == '{' || c == "[")
                stack.push(c)

            else
            {
                if (stack.length == 0)
                    return false;

                let last = stack.pop()!
                if (last != bracket.get(c)) // it is get instead of has
                    return false
                
            }
        }

        return stack.length == 0
    }
}
