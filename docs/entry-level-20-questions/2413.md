# 2413. Smallest Even Multiple
<Badge type="tip" text="Easy" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/smallest-even-multiple/ "Let's go to leetcode")

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

Example 1:
> Input: n = 5
>
> Output: 10
>
> Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:
> Input: n = 6
>
> Output: 6
>
> Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
 
Constraints:

1 <= n <= 150

## How to solve the problem

Check the Given number is odd or even by n%2:

Even:Result : n
Odd:Result : n*2

**Code**

```Python
class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        if n % 2 == 0:
            return n
        else:
            return 2 * n
```


## Complexity

Time complexity: O(1)


Space complexity: O(1)

