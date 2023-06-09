## 快速排序

### partition(二分)

[5,3,7,2,3,4,1]
目标：将数组中小于等于 pivot 放左，大于 pivot 放右边，分两块
设置一个边界：小于等于区域在整个数组的左侧：less
设定 pivot = 3
less = -1 一开始
i 从 0 开始依次遍历数组

分类讨论：
nums[i] <= pivot : 将当前 nums[i]和 less 区域的下一个数做交换，然后 less++扩大 less 区域，i++
nums[i] > pivot: 什么也不做，i++
当遍历到越界，整个操作停

### partition(三分)

将数组中小于 pivot 放左，等于 pivot 放中间，大于 pivot 放右边
设置两个边界：less，more
less：是小于区域边界 ：往右边扩 : less = left - 1 开始
more：是大于区域边界：往左边扩 : right = nums.length - 1 开始
从 i=left 开始遍历数组

分类讨论：
nums[i] = pivot : 什么也不做，i++
nums[i] < pivot: 将当前 nums[i]和 less 区域的右一个数做交换，然后 less++扩大 less 区域，i++
nums[i] > pivot: 将当前 nums[i]和 more 区域的左一个数做交换，然后 more--扩大 more 区域，i 继续留原地不动，继续看 nums[i]

当 i 和 more 撞上的时候，停止遍历

#### 三路实质

i 来到当前位置，i 左侧是小于区域，i 右侧有一堆没看的数和大于区域
实际上就是当前 i 的元素是等于区域的，只需要扩大等于区域就好，i 直接++，代码上就是啥没干直接++
如果是 nums[i]是小于区域的数，那么就发送这个数到小于区域，推着等于区域往右走
实际上推的动作就是交换等于区域的第一个数，根当前 i 所在位置交换，然后扩大小于区域
如果是 nums[i]是大于区域的数，那么就把这个数发送到大于区域，，然后大于区域推着往左走
实际上推的动作是交换当前 i 的元素和大于区域的左边一个位置，然后大于区域扩大
但是因为换过来的数没看过，所以 i 不能动，需要再次查看这个数的情况
