# 2235. Add Two Integers
<Badge type="tip" text="Easy" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/add-two-integers/ "Let's go to leetcode")

Given two integers num1 and num2, return the sum of the two integers.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

Example 1:
> Input: num1 = 12, num2 = 5
>
> Output: 17
>
> Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.

Example 2:
> Input: num1 = -10, num2 = 4
>
> Output: -6
>
> Explanation: num1 + num2 = -6, so -6 is returned.
 
Constraints:

-100 <= num1, num2 <= 100

## How to solve the problem

Just sum them up

**Code**

```Python
class Solution:
    def sum(self, num1: int, num2: int) -> int:
        return num1 + num2
```

## Complexity

Time complexity: O(1)

No traversal is needed; only direct comparisons of the three nodes.

Space complexity: O(1)

No extra data structures are used.
