export default class MergeSort {
  public static sort(arr: number[]): void {
    if (arr.length == 0) return;
    MergeSort._mergeSort(arr, 0, arr.length - 1);
  }

  private static _mergeSort(arr: number[], left: number, right: number): void {
    if (left == right) return;

    let mid = left + Math.floor((right - left) / 2);
    MergeSort._mergeSort(arr, left, mid);
    MergeSort._mergeSort(arr, mid + 1, right);
    MergeSort._merge(arr, left, mid, right);
  }

  private static _merge(
    arr: number[],
    left: number,
    mid: number,
    right: number
  ): void {
    let i = left;
    let j = mid + 1;
    let k = 0;

    const help: number[] = [];

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        help[k] = arr[i];
        k += 1;
        i += 1;
      } else {
        help[k] = arr[j];
        k += 1;
        j += 1;
      }
    }

    while (i <= mid) {
      help[k] = arr[i];
      k += 1;
      i += 1;
    }

    while (j <= right) {
      help[k] = arr[j];
      k += 1;
      j += 1;
    }

    // 最后将help辅助数组拷贝回原来的数组里的同等位置上
    for (let i = 0; i < help.length; i++) {
      arr[left + i] = help[i];
    }
  }
}
