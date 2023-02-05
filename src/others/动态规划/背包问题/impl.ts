/**
  背包问题
  给定两个长度都为N的数组weights和values，weights[i]和values[i]分别代表 i号物品的重量和价值
  给定一个正数bag，表示一个载重bag的袋子，装的物品不能超过这个重量
  返回能装下的最大价值
 */
export { Knapsack };

class Knapsack {
  static maxValue(w: number[], v: number[], bag: number): number {}
}

const weights = [3, 2, 4, 7];
const values = [5, 6, 3, 19];
const bag = 11;
Knapsack.maxValue(weights, values, bag); // 42
