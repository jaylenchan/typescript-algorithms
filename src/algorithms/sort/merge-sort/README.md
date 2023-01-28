## 归并排序

1. 整体是递归算法，左边排序+右边排序+merge让整体有序的过程
2. 让其整体有序的过程用了排外序的方法
3. 利用master公式来求解时间复杂度

### 算法步骤

1. 将给定数组分成左右两部分
2. 对左边部分进行排序，对右边部分进行排序
3. 经过以上步骤，左右部分排序完成，使用一个等长的辅助数组进行合并操作：
   - 左部分的左边界是l，右边界是mid；右部分的左边界是mid+1，右边界是r
   - 从l | mid+1 开始，左部分和右边分的左指针开始往右跑，不断比较左部分和右边分的左指针指向的元素大小，谁大往辅助数组里填，直到跑完左部分或者右部分，停止操作
   - 判断左部分还是右部分有剩余的元素，将剩余的没跑完的元素往辅助数组里填
   - 结束合并过程