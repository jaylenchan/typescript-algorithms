import { GNode } from '@ts-alg/datastructures/graph/impl';

function breadthFirstSearch(node: GNode): number[] {
  let ans: number[] = []

  if (node == null) return ans;

  const queue: GNode[] = [];
  const visited = new Set<GNode>();

  queue.push(node);
  visited.add(node);

  while (queue.length > 0) {
    const curNode = queue.shift()!;
    // 广度优先处理节点：从队列中弹出就处理当前节点
    ans.push(curNode.value)
    console.log('cur path is :', ans.join('->'))
    for (const nextNode of curNode.nexts) {
      if (!visited.has(nextNode)) {
        queue.push(nextNode);
        visited.add(nextNode)
      }
    }
  }

  return ans
}

export default breadthFirstSearch
