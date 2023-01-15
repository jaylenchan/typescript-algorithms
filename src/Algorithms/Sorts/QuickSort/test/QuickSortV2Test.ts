import QuickSortV2 from '../v2-impl';
import QuickSortV1Test from './QuickSortV1Test';

export default class QuickSortV2Test extends QuickSortV1Test {
  public test(arr: number[]): void {
    QuickSortV2.sort(arr);
  }
}
