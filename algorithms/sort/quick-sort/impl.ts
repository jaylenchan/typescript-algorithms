export default class QuickSort {
  public static sort(nums: number[]): void {
    return this._sort(nums, 0, nums.length - 1);
  }

  private static _sort(nums: number[], left: number, right: number): void {
    if (left > right) return;

    const [el, er] = this.partition(nums, left, right);

    this._sort(nums, left, el - 1);
    this._sort(nums, er + 1, right);
  }

  private static partition(
    nums: number[],
    left: number,
    right: number
  ): [number, number] {
    if (left > right) return [-1, -1];
    if (left == right) return [left, right];

    /** ----------随机获取random与right交换---------- */
    let random = left + Math.floor(Math.random() * (right - left + 1)); // [left, right] 的随机索引
    this.swap(nums, random, right);
    /** ----------随机获取random与right交换---------- */

    let less = left - 1;
    let more = right;

    let pivot = nums[right];
    let index = left;

    while (index < more) {
      if (nums[index] < pivot) {
        this.swap(nums, index++, ++less);
      } else if (nums[index] > pivot) {
        this.swap(nums, index, --more);
      } else {
        index++;
      }
    }

    this.swap(nums, more, right);

    return [less + 1, more];
  }

  private static swap(nums: number[], i: number, j: number): void {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
