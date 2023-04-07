;
import ArrayStack from '../ArrayStack-impl';
import LinkedListStack from '../LinkedListStack-impl';

describe('ArrayStack', () => {
  it('getSize', () => {
    const stack = new ArrayStack<number>();
    stack.push(1);
    stack.push(2);

    assert.equal(stack.getSize(), 2);
  });

  it('isEmpty', () => {
    const stack = new ArrayStack<number>();

    assert.equal(stack.isEmpty(), true);
  });

  it('push', () => {
    const stack = new ArrayStack<number>();
    stack.push(1);

    assert.equal(stack.getSize(), 1);
  });

  it('pop', () => {
    const stack = new ArrayStack<number>();
    stack.push(1);
    stack.pop();

    assert.equal(stack.getSize(), 0);
  });

  it('peek', () => {
    const stack = new ArrayStack<number>();
    stack.push(1);
    stack.peek();

    assert.equal(stack.getSize(), 1);
  });
});

describe('LinkedListStack', () => {
  it('list stack', () => {
    const stack = new LinkedListStack<number>();
    for (let i = 0; i < 5; i++) {
      stack.push(i);
      console.log(stack.toString());
    }
    stack.pop();
    console.log(stack.toString());
  });
});
