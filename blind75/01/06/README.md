# 238. Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

Example 1:

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

Example 2:

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

Constraints:

- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

**Follow up**: Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

---
**The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer?**

Let's say you have an array of integers, such as [2, 4, 6, 8].

A prefix of this array is any subset of integers that includes the first element of the array, such as [2], [2, 4], [2, 4, 6], or [2, 4, 6, 8].

A suffix of this array is any subset of integers that includes the last element of the array, such as [8], [6, 8], [4, 6, 8], or [2, 4, 6, 8].

The product of a subset of integers is simply the result of multiplying all the integers in the subset together. For example, the product of [2, 4] is 8, and the product of [4, 6, 8] is 192.

The statement "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer" means that if you compute the product of any prefix or suffix of the array, the result will be a number that can be represented by a 32-bit integer.

In other words, the product will not be too big to fit within the constraints of a 32-bit integer. This is useful information when designing an algorithm that involves computing products of subarrays, as it ensures that the intermediate results will not cause an integer overflow error.
