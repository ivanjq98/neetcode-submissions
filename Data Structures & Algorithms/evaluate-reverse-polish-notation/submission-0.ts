class Solution {
// T: O(n)
// S: O(n)
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                const b = stack.pop()!;   // right operand (popped first)
                const a = stack.pop()!;   // left operand

                switch (token) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/': stack.push(Math.trunc(a / b)); break;
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop()!;
    }
}