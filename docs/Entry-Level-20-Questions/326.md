# 326. Power of Three
<Badge type="tip" text="Easy" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/power-of-three/ "Let's go to leetcode")

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3<sup>x</sup>.

Example 1:
> Input: n = 27
>
> Output: true
>
> Explanation: 27 = 3<sup>3</sup>

Example 2:
> Input: n = 0
>
> Output: false
>
> Explanation: There is no x where 3<sup>x</sup> = 0.

Example 3:
> Input: n = -1
>
> Output: false
>
> Explanation: There is no x where 3<sup>x</sup> = (-1).

Constraints:

-2<sup>31</sup> <= n <= 2<sup>31</sup> - 1

## How to solve the problem

1. Using loop to check if n is divisible by 3, and if n/3 is also divisible by 3, and so on.

2. Using logrithm, if a number is a power of 3, then its log<sub>3</sub>(n) must be an integer. Combining the logarithmic base conversion formula: log<sub>3</sub>(n) = log<sub>10</sub>(n) / log<sub>10</sub>(3)

**Code**

- Loop
```Python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0: return False
        while n > 1:
            if n % 3 != 0: return False
            n //= 3
        return True
```
- Logarithm

```Python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0: return False
        return (math.log10(n) / math.log10(3)).is_integer()
```

## Complexity

Time complexity: O(log<sub>3</sub>(n))

Space complexity: O(1)