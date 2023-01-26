## 前缀和

计算连续子数组的和，很容想到可以使用前缀和（Prefix Sum）的方式。

`prefixSum[n]`代表数组的前n项的和（类比与数学当中的数列前N项和）

```typescript
// 求数列前N项和
Sn = A1 + A2 + .. + An

// 求数组前N项和
prefixSum[n] = nums[0] + nums[1] + .. + nums[n-1]
```

`prefixSum`常初始化为`nums.length+1`长度的数组

```typescript
// nums
// 0 1 2 3
  [1,2,3,4]
// prefixSum
// 0 1 2 3 4
  [0,1,3,6,10]
```

数列当中求第n项An有公式`Sn - Sn-1`

nums当中求第n项nums[n-1]也有公式`prefixSum[n] - prefixSum[n-1]`，比如这里是`第2项，nums[2-1] = nums[1] = 2 = prefixSum[2] - prefixSum[1] = 3 -1`



```typescript
数列当中，
S5 - S2  = 数列第3项 到 第5项的和
= (A1 + A2 + A3 + A4 + A5) - (A1 + A2)
= A3 + A4 + A5

nums当中，
prefixSum[5] - prefixSum[2] = nums第3项 到 第5项的和 = nums[2] - nums[4]
= (nums[0] + nums[1] + nums[2] + nums[3] + nums[4]) - (nums[0] + nums[1])
= nums[2] + nums[3] + nums[4]

// 设i= 2, j=4，如果要求数组2,4这个区间（左闭右闭）的和，只需要用prefixSum[4+1] - prefixSum[2]
// 即求数组[i,j]的和，只需要前缀和求prefixSum[j+1] - prefixSum[i]
```

