import SortTest from '../../Sort/test/SortTest';
import Selection from '../impl';

export default class SelectionSortTest extends SortTest {
  public test(arr: number[]) {
    Selection.sort(arr);
  }
}
