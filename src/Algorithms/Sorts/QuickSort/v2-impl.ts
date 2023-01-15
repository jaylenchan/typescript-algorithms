import QuickSortV1 from './v1-impl';

export default class QuickSortV2 extends QuickSortV1 {
  //
  public static _partition(arr: number[], left: number, right: number): number {
    // arr[left+1, j] < v    arr[j+1, i-1]
    let randomIndex = left + Math.floor(Math.random() * (right - left + 1)); // [left, right] 的随机索引
    QuickSortV1._swap(arr, randomIndex, left); // 将randomIndex 和 left 位置的元素做交换

    let pivot = arr[left]; // 现在这里的标定点就是随机值，而不是一定是一开始最左边的元素了，因为已经经过了交换
    let j = left;

    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        j += 1;
        QuickSortV1._swap(arr, i, j);
      }
    }

    QuickSortV1._swap(arr, left, j);

    return j;
  }
}
