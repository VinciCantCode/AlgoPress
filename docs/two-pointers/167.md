# 167. Two Sum II - Input Array Is Sorted
<Badge type="warning" text="Medium" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ "Let's go to leetcode")

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
> Input: numbers = [2,7,11,15], target = 9
> Output: [1,2]
> Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
> Input: numbers = [2,3,4], target = 6
> Output: [1,3]
> Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
> Input: numbers = [-1,0], target = -1
> Output: [1,2]
> Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 
Constraints:
- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `1 <= target <= 10^9`
- Only one valid answer exists.

## How to solve the problem

- Two pointers: This approach can only be used when the `numbers` array is sorted. We take the sum of minimal and maximal element, if the sum is bigger than target, then it means the maximal element plus any element in the `numbers` array will be bigger than target, so we let `right -= 1`. Vice versa, if the sum is smaller than the target, we let `left += 1`.

**Code**

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        while left < right:
            s = numbers[left] + numbers[right]
            if s == target:
                break
            if s < target:
                left += 1
            else:
                right -= 1
        return [left + 1, right + 1]
```

## Complexity

Time complexity: O(n)

- The input array is traversed at most once. Thus the time complexity is O(n).

Space complexity: O(1)

- We only use additional space to store two indices and the sum, so the space complexity is O(1).