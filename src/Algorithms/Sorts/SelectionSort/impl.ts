import Sort from '../Sort/impl';

export default class SelectionSort {
  public static sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (Sort.less(arr[j], arr[min])) {
          min = j;
        }
      }
      Sort.exch(arr, i, min);
    }
  }
}
