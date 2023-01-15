export default class Sort {
  public static less(v: number, w: number): boolean {
    return v < w;
  }

  public static exch(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  public static show(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i] + ' ');
    }
    console.log('\r\n');
  }

  public static isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (Sort.less(arr[i], arr[i - 1])) return false;
    }
    return true;
  }
}
