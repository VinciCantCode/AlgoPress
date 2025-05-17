# 231. Power of Two
<Badge type="tip" text="Easy" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/power-of-two/ "Let's go to leetcode")

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2<sup>x</sup>.

Example 1:
> Input: n = 1
>
> Output: true
>
> Explanation: 2<sup>0</sup> = 1

Example 2:
> Input: n = 16
>
> Output: true
>
> Explanation: 2<sup>4</sup> = 16

Example 3:
> Input: n = 3
>
> Output: false
 
Constraints:

-2<sup>31</sup> <= n <= 2<sup>31</sup> - 1

## How to solve the problem

1. Using while loop.

2. Using logarithm, if a number is a power of 2, then its log<sub>2</sub>(n) must be an integer. 

**Code**

- Loop

```Python
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0: return False
        while n > 1:
            if n % 2 != 0: return False
            n //= 2
        return True
```

- Logarithm

```Python
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0: return False
        return math.log2(n).is_integer()
```

## Complexity

Time complexity: O(log n)

The number of iterations is equal to the number of digits in n, which is ⌊log<sub>10</sub>(n)⌋ + 1.

Space complexity: O(1)
