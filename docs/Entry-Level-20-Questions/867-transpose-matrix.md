# 867. Transpose Matrix
<Badge type="tip" text="Easy" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/transpose-matrix/ "Let's go to leetcode")

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:
> Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
> Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:
> Input: matrix = [[1,2,3],[4,5,6]]
> Output: [[1,4],[2,5],[3,6]]

## Constraints:
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 105`
- `-109 <= matrix[i][j] <= 109`

## How to solve the problem

- Using nested loop to change row and column. 

**Code**

```python
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        result = [[0] * len(matrix) for _ in range(len(matrix[0]))] #both work
        # result = [[0 for _ in range(len(matrix))] for _ in range(len(matrix[0]))] # both work
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                result[j][i] = matrix[i][j]
        return result
```

## Complexity

Time complexity: O(m*n)
- Outer loop runs m times, inner loop runs n times. So T(n) = O(m*n).

Space complexity: O(m*n)
- Create a new matrix `result` which space is O(m*n)
