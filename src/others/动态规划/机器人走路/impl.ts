/** 题目描述：
    假设有排成一行的n个位置记为1~n，n一定大于或等于2
    开始时机器人在其中的start位置上(start一定是1~n中的一个)
    规则：
    1.如果机器人来到1位置，那么下一步只能往右来到2位置；
    2.如果机器人来到n位置，那么下一步只能往左来到n-1位置；
    3.如果机器人来到中间位置，那么下一步可以往左走或者往右走；
    规定机器人必须走k步，最终能来到aim位置(aim也是1~n中的一个)的方法有多少种
    给定四个参数 n、start、k、aim，返回方法数
 */

export { robotWalk };

function robotWalk(n: number, start: number, aim: number, k: number) {
  // todo
}

robotWalk(4, 2, 4, 4); // 3
