import SortTest from '../../Sort/test/SortTest';
import Insertion from '../impl';

export default class InsertionSortTest extends SortTest {
  public test(arr: number[]) {
    Insertion.sort(arr);
  }
}
