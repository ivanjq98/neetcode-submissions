class Solution {
// T: O(n)
// S: O(n)
    isAlphanumeric(char){
        return(
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }

    isPalindrome(s: string): boolean {
        let right = s.length - 1
        let newStr = '';

        for (let c of s)
        {
            if (this.isAlphanumeric(c))
                newStr += c.toLowerCase();
        }
        return newStr === newStr.split('').reverse().join('')
    }
}
