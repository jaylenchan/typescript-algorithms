import SortTest from '../../Sort/test/SortTest';
import Selection from '../impl';

class Test extends SortTest {
  public test(arr: number[]) {
    Selection.sort(arr);
  }
}

describe('Selection Sort', () => {
  it('Selection Sort Test', () => {
    const test = new Test();

    test.runTest();
  });
});
