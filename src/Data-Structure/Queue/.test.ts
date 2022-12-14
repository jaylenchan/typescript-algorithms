import { assert } from 'chai';
import ArrayQueue from './ArrayQueue-impl';

describe('ArrayQueue', () => {
  it('getSize', () => {
    const queue = new ArrayQueue<number>();
    queue.enqueue(1);
    queue.enqueue(2);

    assert.equal(queue.getSize(), 2);
  });

  it('isEmpty', () => {
    const queue = new ArrayQueue<number>();

    assert.equal(queue.isEmpty(), true);
  });

  it('enqueue', () => {
    const queue = new ArrayQueue<number>();
    queue.enqueue(1);

    assert.equal(queue.getSize(), 1);
  });

  it('dequeue', () => {
    const queue = new ArrayQueue<number>();
    queue.enqueue(1);
    queue.dequeue();

    assert.equal(queue.getSize(), 0);
  });

  it('getFront', () => {
    const queue = new ArrayQueue<number>();
    queue.enqueue(1);
    queue.getFront();

    assert.equal(queue.getSize(), 1);
  });
});
