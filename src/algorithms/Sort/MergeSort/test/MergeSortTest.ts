import { assert } from 'chai';
import ArrayComparator from '../../../../helper/ArrayComparator-impl';
import MergeSort from '../impl';

export default class QuickSortTest extends ArrayComparator {
  public test(arr: number[]): void {
    MergeSort.sort(arr);
  }

  public comparator(arr: number[]): void {
    arr.sort((a, b) => a - b);
  }

  public runTest() {
    //开始测试
    for (let i = 0; i < this.testTime; i++) {
      let [sample1, sample2] = this.generateRandomSample();
      // 用随机样本产生器产生出来的两份同样的样本跑方法A和方法B，观察结果是否一致
      // 如果两个相同的样本集合有一个测试样本通过两个实现同样功能的方法AB处理后，数组的元素不同
      // 就停止测试，说明有方法实现的有问题！打印出来两个数组
      this.test(sample1);
      this.comparator(sample2);

      assert.sameOrderedMembers(sample1, sample2);
    }

    // 当样本量足够大且比对依然正确的时候，可以判定方法A已经实现正确
  }
}
