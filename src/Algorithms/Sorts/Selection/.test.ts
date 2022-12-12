import { assert } from 'chai';
import Selection from './impl';

describe('Selection Sort', () => {
  it('[1, 2, 3, 4, 5]', () => {
    const arr = [5, 4, 1, 2, 3];
    Selection.sort(arr);
    assert.sameOrderedMembers(arr, [1, 2, 3, 4, 5]);
  });
  it('[]', () => {
    const arr: number[] = [];
    Selection.sort(arr);
    assert.sameOrderedMembers(arr, []);
  });
  it('[1, 2, 3]', () => {
    const arr = [1, 2, 3];
    Selection.sort([1, 2, 3]);
    assert.sameOrderedMembers(arr, [1, 2, 3]);
  });
  it('[5, 6, 7, 8, 1, 2, 12, 14]', () => {
    const arr = [5, 6, 7, 8, 1, 2, 12, 14];
    Selection.sort(arr);
    assert.sameOrderedMembers(arr, [1, 2, 5, 6, 7, 8, 12, 14]);
  });
  it('[5, 6, 7, 8, 9, 4]', () => {
    const arr = [5, 6, 7, 8, 9, 4];
    Selection.sort(arr);
    assert.sameOrderedMembers(arr, [4, 5, 6, 7, 8, 9]);
  });
  it('[20, 30, 40]', () => {
    const arr = [20, 30, 40];
    Selection.sort(arr);
    assert.sameOrderedMembers(arr, [20, 30, 40]);
  });
});
