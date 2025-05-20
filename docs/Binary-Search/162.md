# 162. Find Peak Element

<Badge type="warning" text="Medium" /> [<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/find-peak-element/ "Let's go to leetcode")

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

Example 1
> Input: nums = [1,2,3,1]
>
> Output: 2
>
> Explanation: 3 is a peak element and your function should return the index number 2.

Example 2
> Input: nums = [1,2,1,3,5,6,4]
>
> Output: 5
>
> Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

Constraints:
- `1 <= nums.length <= 1000`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `nums[i] != nums[i + 1]` for all valid i.

## How to solve the problem

- Binary Search with O(log n) time complexity. If nums[mid] > nums[mid + 1], peak is equal to mid or on the left, so move `right = mid`. 
If nums[mid] < nums[mid + 1], nums[mid] can never the peak, so we move `left = mid + 1` instead of left = mid.
**Code**

- Binary Search

```Python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[mid + 1]: # if nums[mid] > nums[mid + 1], peak is equal to mid or on the left, so move `right = mid`
                right = mid 
            else: # if nums[mid] < nums[mid + 1], nums[mid] can never the peak, so we move `left = mid + 1` instead of left = mid
                left = mid + 1
        return left
```

## Complexity

Time complexity: O(log n)

Space complexity: O(1)
