import QuickSortV1Test from './QuickSortV1Test';
import QuickSortV2Test from './QuickSortV2Test';
import QuickSortV3Test from './QuickSortV3Test';

describe('Quick Sort', () => {
  it('Quick Sort V1 Test', () => {
    const test = new QuickSortV1Test();

    test.runTest();
  });

  it('Quick Sort V2 Test', () => {
    const test = new QuickSortV2Test();

    test.runTest();
  });

  it('Quick Sort V3 Test', () => {
    const test = new QuickSortV3Test();

    test.runTest();
  });
});
