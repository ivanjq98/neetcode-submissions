class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        let n = matrix.length 
        const rotated = Array.from({ length: n}, () => Array(n).fill(0))

        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                rotated[j][n-i-1] = matrix[i][j]

        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++) 
                matrix[i][j] = rotated[i][j]
    }
}
