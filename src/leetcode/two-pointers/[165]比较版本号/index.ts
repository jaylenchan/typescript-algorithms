/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  let v1 = parseVersion(version1);
  let v2 = parseVersion(version2);

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    let x = i < v1.length ? v1[i] : 0;
    let y = i < v2.length ? v2[i] : 0;

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    }
  }

  return 0;
}

function parseVersion(version: string): number[] {
  return version.split('.').map((i) => Number(i));
}
// @lc code=end
