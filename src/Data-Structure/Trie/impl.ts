import ITrie from './interface';

class TNode {
  public isWord: boolean;
  public next: Map<string, TNode>;

  constructor(isWord?: boolean) {
    this.isWord = isWord ?? false;
    this.next = new Map<string, TNode>();
  }
}

class Trie implements ITrie {
  private root: TNode;
  private size: number;

  constructor() {
    this.root = new TNode();
    this.size = 0;
  }

  public getSize(): number {
    return this.size;
  }

  public add(word: string): void {
    let cur = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!cur.next.get(char)) {
        cur.next.set(char, new TNode());
      }
      cur = cur.next.get(char)!;
    }

    if (!cur.isWord) {
      cur.isWord = true;
      this.size += 1;
    }
  }

  public contains(word: string): boolean {
    let cur = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!cur.next.get(char)) {
        return false;
      }
      cur = cur.next.get(char)!;
    }

    return cur.isWord;
  }

  public isPrefix(prefix: string): boolean {
    let cur = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (!cur.next.get(char)) {
        return false;
      }

      cur = cur.next.get(char)!;
    }

    return true;
  }
}

export default Trie;
