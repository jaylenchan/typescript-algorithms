import SortTest from '../../Sort/test/SortTest';
import InsertionSort from '../impl';

export default class InsertionSortTest extends SortTest {
  public test(arr: number[]) {
    InsertionSort.sort(arr);
  }
}
