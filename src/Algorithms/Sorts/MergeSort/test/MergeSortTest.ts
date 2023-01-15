import SortTest from '../../Sort/test/SortTest';
import MergeSort from '../impl';

export default class MergeSortTest extends SortTest {
  public test(arr: number[]): void {
    MergeSort.sort(arr);
  }
}
