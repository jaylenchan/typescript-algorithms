## Manacher算法

### 情况分类1： I 在R外边
- 结论：暴力破解，有多大扩展多大 

### 情况分类2： I 在R内部

 - 小分类1：I对应的I'的回文区域在L，R内部，完全被罩住
```tsx
  // 结论：pArr[i] = pArr[i']
  [a b (c d c) k s t s k (c d c) b a]
   L      I'       C        I      R
```

 - 小分类2：I对应的I'的回文区域有地方跑到L，R外边去了
```tsx
  // 结论：pArr[i] = R - I
  (a b [c d e d c b a) t s t a b (c d e d c)] f
        L   I'  L'       C        R'  I   R
```

  - 小分类3：I对应的I'的回文区域的左边界和L重叠
```tsx
  // 结论：I的回文半径至少跟I‘那么大，并且有可能更大
  // 是否能够突破R再往右边，只能继续验
  x [(a b c b a) s t s (a b c b a)] y
      L   I'       C        I   R
```

