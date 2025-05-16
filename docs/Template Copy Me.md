# 264. Ugly Number

An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

Example 1:
> Input: n = 6
>
> Output: true
>
> Explanation: 6 = 2 × 3

Example 2:
> Input: n = 1
>
> Output: true
>
> Explanation: 1 has no prime factors.

Example 3:
> Input: n = 14
>
> Output: false
>
> Explanation: 14 is not ugly since it includes the prime factor 7.
 
Constraints:

-2<sup>31</sup> ≤ n ≤ 2<sup>31</sup> - 1

## How to solve the problem

- Using n to divide 2, 3 and 5 repeatedly until n can no longer be divided by 2, 3 and 5. If `n == 1` in the end, it is an ugly number.

**Code**

```Python
class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0: return False
        if n == 1: return True
        for prime in [2, 3, 5]:
            while n % prime == 0:
                n //= prime
        return n == 1
```

## Complexity

Time complexity: O(n)


Space complexity: O(1)
