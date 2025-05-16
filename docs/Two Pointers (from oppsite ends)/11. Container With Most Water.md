# 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
> Input: height = [1,8,6,2,5,4,8,3,7]
>
> Output: 49
>
> Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
>
> ![11. Container With Most Water](../images/question_11.jpg)

Example 2:
> Input: height = [1,1]
>
> Output: 1

## Constraints:
- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`dd

## How to solve the problem

- Assuming we have `height[left]` from start, `height[right]` from end, and `height[left]` > `height[right]`. No matter how we change `height[left]`, the biggest area is always equal to `height[left]` * `height[right]`, because the area is determined by the short height which is `height[right]`. So, we need to change the short height to `right--`.

**Code**

- Two Pointer

```Python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maxArea = 0
        while left < right:
            area = (right - left) * min(height[left], height[right])
            maxArea = max(maxArea, area)
            if height[left] > height[right]:
                right -= 1
            else:
                left += 1
        return maxArea
```

- Brute Force

```Python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height)
        maxArea = 0
        for left in range(len(height)):
            for right in range(left+1, len(height)):
                area = min(height[left], height[right]) * (right - left)
                maxArea = max(area, maxArea)
        return maxArea
```

## Complexity

Time complexity: 

- Two Pointer: O(n)
- Brute Force: O(n^2)

Space complexity: O(1)
