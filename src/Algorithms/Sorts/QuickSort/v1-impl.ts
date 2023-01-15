export default class QuickSort {
  public static sort(arr: number[]): void {
    QuickSort._quickSort(arr, 0, arr.length - 1);
  }

  private static _quickSort(arr: number[], left: number, right: number): void {
    if (left >= right) return;

    const pivot = QuickSort._partition(arr, left, right);
    QuickSort._quickSort(arr, left, pivot - 1);
    QuickSort._quickSort(arr, pivot + 1, right);
  }

  // 利用partition每次在left到right区间上排定1个数
  // partition过程完毕后需要返回标定点排定后在数组中的索引
  // partition要做的事：取数组当中的某个标定点v，让标定点的左边都是小于v的，右边都是大于v的
  private static _partition(
    arr: number[],
    left: number,
    right: number
  ): number {
    // arr[left+1, j] < v    arr[j+1, i-1]
    let pivot = arr[left];
    let j = left;

    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        j += 1;
        QuickSort._swap(arr, i, j);
      }
    }

    QuickSort._swap(arr, left, j);

    return j;
  }

  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
