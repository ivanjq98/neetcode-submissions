class Solution {
    // T: O(n)
    // S: O(n)
    isValid(s: string): boolean {
        // Edge cases
        // 1. If there is stack remaining, return false
        // 2. If there is zero stack, return false

        // 1. Create an array of brackets
        // 2. Iteration through each index to find if it is a bracket
        // 3. Pop when it has open bracket

        const bracket = new Map<string, string>([
            [ "]", "["],
            [ ")", "("],
            [ "}", "{"]
        ])

        const stack : string[] = []

        for (const check of s)
        {
            if (check === "(" || check === "{" || check === "[")
                stack.push(check)
            else
            {
                if (stack.length == 0)
                    return false;

                let output = stack.pop()!
                if (output != bracket.get(check)) // it is get instead of has
                    return false
            }
        }
        return stack.length == 0 
    }
}
