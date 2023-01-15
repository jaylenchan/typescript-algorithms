import Sort from '../Sort/impl';

export default class InsertionSort {
  public static sort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && Sort.less(arr[j], arr[j - 1]); j--) {
        Sort.exch(arr, j, j - 1);
      }
    }
  }
}
