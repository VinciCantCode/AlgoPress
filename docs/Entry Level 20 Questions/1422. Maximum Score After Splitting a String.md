# 1422. Maximum Score After Splitting a String

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Example 1:
> Input: s = "011101"
>
> Output: 5 
>
> Explanation: 
> All possible ways of splitting s into two non-empty substrings are:
>
> left = "0" and right = "11101", score = 1 + 4 = 5 
>
> left = "01" and right = "1101", score = 1 + 3 = 4 
>
> left = "011" and right = "101", score = 1 + 2 = 3 
>
> left = "0111" and right = "01", score = 1 + 1 = 2 
>
> left = "01110" and right = "1", score = 2 + 1 = 3

Example 2:
> Input: s = "00111"
>
> Output: 5
>
> Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

Example 3:
> Input: s = "1111"
>
> Output: 3

## Constraints:
- `2 <= s.length <= 500`
- The string s consists of characters '0' and '1' only.

## How to solve the problem

1. Slice string into two strings `left` and `right`

2. Count Left Zeros and Right Ones

**Code**

- Using string slicing operations with O(n^2) time complexity and O(n) space complexity

```Python
class Solution:
    def maxScore(s: str) -> int:
        maxScore = 0
        for i in range(1, len(s)):
            left = s[:i]
            right = s[i:]
            sum = left.count('0') + right.count('1')
            while sum > maxScore:
                maxScore = sum
        return maxScore
```

- With O(n) time complexity and O(1) space complexity

```Python
class Solution:
    def maxScore(self, s: str) -> int:
        zero = 0
        one = s.count('1')
        sum = 0
        for i in range(len(s)-1):
            if s[i] == '1':
                one -= 1
            else:
                zero += 1
            sum = max(sum, one + zero)
        return sum
```

## Complexity

Time complexity: O(n)
- The input string is traversed at most once.

Space complexity: O(1)
- Only using a few variables to store the counts.
