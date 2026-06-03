# Vue 3 + TypeScript 联合练习

Vue 3 Composition API 与 TypeScript 类型标注结合使用。

## 练习内容

### Pinia 状态管理
- `defineStore` 组合式 API 写法（setup store）
- `ref` + `computed` 定义状态和计算属性
- 组件中直接使用 store 实例

### ref 类型标注
- `ref<number>()` 自动推断类型
- `ref<string | number>()` 联合类型标注

### reactive 类型标注
- `reactive<Kyoku>()` 接口类型标注
- `reactive<Currency[]>()` 泛型数组

### computed 类型推导
- `computed()` 自动推导返回值类型
- 配合 `filter` 过滤数组

### 事件处理类型
- `(e: Event)` 参数类型标注
- `e.target as HTMLInputElement` 类型断言

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3.5 (Composition API) |
| 状态 | Pinia 3 |
| 语言 | TypeScript |
| 构建 | Vite 8 |

## 快速开始

```sh
npm install
npm run dev
```
