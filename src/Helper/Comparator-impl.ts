function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class Comparator {
  // 按照功能实现一个方法A
  public static A(arr: number[]): void {
    if (arr == null || arr.length < 2) {
      return;
    }
    for (let end = arr.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
        }
      }
    }
  }
  // 按照功能实现一个方法B（但是B方法容易实现并且复杂度没那么好）
  public static B(arr: number[]): void {
    arr.sort((a, b) => a - b);
  }
  // 实现一个随机样本产生器
  public static generateRandomArray(
    maxSize: number,
    maxValue: number
  ): number[] {
    const randomArray: number[] = [];
    const randomSize = Math.floor((maxSize + 1) * Math.random()); // [0,maxSize]

    for (let i = 0; i < randomSize; i++) {
      randomArray[i] =
        Math.floor((maxValue + 1) * Math.random()) -
        Math.floor(maxValue * Math.random());
    }

    return randomArray;
  }

  // 先用随机样本产生器产生出随机样本，然后拷贝一份同样的随机样本
  public static copyArray(randomArray: number[]): number[] {
    if (!randomArray) throw new Error('randomArray is not a number array.');

    const copyRandomArray: number[] = [];

    for (let i = 0; i < randomArray.length; i++) {
      copyRandomArray[i] = randomArray[i];
    }

    return copyRandomArray;
  }

  // 比较两份处理过后的样本数组是否相同
  public static isEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1 == null && arr2 == null) {
      return true;
    }
    if (arr1 == null || arr2 == null) {
      return false;
    }
    if (arr1.length != arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }

  //打印数组
  public static printArray(arr: number[]): void {
    if (arr == null) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i] + ' ');
    }
    console.log('\n');
  }
}

function main() {
  let testTime = 50000; //测试次数
  let maxSize = 100; //最大测试容量
  let maxValue = 100; //最大测试数据
  let succeed = true; //是否对比成功

  //开始测试
  for (let i = 0; i < testTime; i++) {
    let arr1 = Comparator.generateRandomArray(maxSize, maxValue);
    let arr2 = Comparator.copyArray(arr1);
    // 用随机样本产生器产生出来的两份同样的样本跑方法A和方法B，观察结果是否一致
    Comparator.A(arr1);
    Comparator.B(arr2);

    // 当样本量足够大且比对依然正确的时候，可以判定方法A已经实现正确
    if (!Comparator.isEqual(arr1, arr2)) {
      succeed = false;
      break;
    }
  }

  console.log(succeed ? 'Nice' : 'Bad');

  // 如果有一个样本使得比对出错，打印样本分析是哪个方法出错
  // let arr = Comparator.generateRandomArray(maxSize, maxValue);
  // Comparator.printArray(arr); //没排序打印
  // Comparator.A(arr); //排序
  // Comparator.printArray(arr); //排序完打印，程序员自己观察是否正确
}

main();
