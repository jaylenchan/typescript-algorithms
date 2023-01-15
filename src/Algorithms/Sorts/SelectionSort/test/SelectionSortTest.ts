import SortTest from '../../Sort/test/SortTest';
import SelectionSort from '../impl';

export default class SelectionSortTest extends SortTest {
  public test(arr: number[]) {
    SelectionSort.sort(arr);
  }
}
