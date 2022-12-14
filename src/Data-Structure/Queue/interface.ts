export default interface Queue<T> {
  getSize(): number;
  isEmpty(): boolean;
  isFull(): boolean;
  enqueue(e: T): void;
  dequeue(): T;
  getFront(): T;
}
