# 42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
> Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
>
> Output: 6
>
> Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
>
> ![42. Trapping Rain Water](../images/question_12rainwatertrap.png)

Example 2:
> Input: height = [4,2,0,3,2,5]
>
> Output: 9

## Constraints:
- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

## How to solve the problem

1. Traversing all the prefix and suffix array. Save the `preMax` and `sufMax` as two new arrays, the water volume equals to `min(preMax, sufMax) - h`.

2. No need to traverse all the prefix and suffix array, despite we don't know the un-traversal array, but we still can compare `height[left]` and `height[right]`. If `height[left]` < `height[right]`, then we update `area += preMax - height[left]` and `left += 1`, vice versa.

**Code**

- Approach 1: Prefix and Suffix

```Python
class Solution:
    def trap(self, height: List[int]) -> int:
        # Approach 1: prefix and suffix
        # Assume we have many buckets, each with left side and right side
        preMax = [0] * len(height)
        preMax[0] = height[0] 
        for i in range(1, len(height)):
            preMax[i] = max(preMax[i-1], height[i])

        sufMax = [0] * len(height)
        sufMax[-1] = height[-1]
        for i in range(len(height)-2, -1, -1): # Traverse from back to front, step = -1, -1 includes the first element
            sufMax[i] = max(sufMax[i+1], height[i])
        
        ans = 0
        for pre, suf, h in zip(preMax, sufMax, height):
            ans += min(pre, suf) - h
        
        return ans
```

- Approach 2: Two Pointer

```Python
class Solution:
    def trap(self, height: List[int]) -> int:
        # Approach 2: Two Pointer
        # Assume we have many buckets, each with left side and right side. No need to save preMax and sufMax as array.
        left = 0 
        right = len(height) - 1
        preMax = 0
        sufMax = 0
        area = 0
        while left < right:
            preMax = max(preMax, height[left])
            sufMax = max(sufMax, height[right])
            if height[left] < height[right]:
                area += preMax - height[left]
                left += 1
            else:
                area += sufMax - height[right]
                right -= 1
        return area
```

## Complexity

Time complexity: O(n)

Space complexity: 

- Prefix and Suffix: O(n)
- Two Pointer: O(1)
