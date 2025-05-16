# 852. Peak Index in a Mountain Array

You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your task is to solve it in O(log(n)) time complexity.

Example 1:
> Input: arr = [0,1,0]
>
> Output: 1

Example 2:
> Input: arr = [0,2,1,0]
>
> Output: 1

Example 3:
> Input: arr = [0,10,5,2]
>
> Output: 1

## Constraints:
- `3 <= arr.length <= 10^5`
- `0 <= arr[i] <= 10^6`
- `arr` is guaranteed to be a mountain array.

## How to solve the problem

1. Linear Search with O(n) time complexity.
2. Binary Search with O(log n) time complexity.

**Code**

- Approach 1: Linear Search

```Python
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        for i in range(1, len(arr)):
            if arr[i] < arr[i-1]:
                return i - 1
```

- Approach 2: Binary Search

```Python
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        left = 0
        right = len(arr) - 1
        while left < right:
            mid = (left + right) // 2
            if arr[mid] < arr[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return left
```

## Complexity

Time complexity: 
- Linear Search: O(n)
- Binary Search: O(log n)

Space complexity: O(1)
