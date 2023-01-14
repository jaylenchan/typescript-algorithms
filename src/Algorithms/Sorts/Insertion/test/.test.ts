import SortTest from '../../Sort/test/SortTest';
import Insertion from '../impl';

class Test extends SortTest {
  public test(arr: number[]) {
    Insertion.sort(arr);
  }
}

describe('Insertion Sort', () => {
  it('Insertion Sort Test', () => {
    const test = new Test();

    test.runTest();
  });
});
