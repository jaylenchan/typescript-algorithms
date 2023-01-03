import BinarySearch from './impl';
import { assert } from 'chai';

describe('BinarySearch Recursive', () => {
  it('search 19 is in index 4', () => {
    const arr = [1, 3, 4, 6, 19];
    assert.equal(BinarySearch.searchR(arr, 19), 4);
  });

  it('search 1 is in index 0', () => {
    const arr = [1, 3, 4, 6, 19];
    assert.equal(BinarySearch.search(arr, 1), 0);
  });
});

describe('BinarySerach None Recursive', () => {
  it('search 19 is in index 4', () => {
    const arr = [1, 3, 4, 6, 19];
    assert.equal(BinarySearch.search(arr, 19), 4);
  });

  it('search 1 is in index 0', () => {
    const arr = [1, 3, 4, 6, 19];
    assert.equal(BinarySearch.search(arr, 1), 0);
  });
});
