# 前端学习仓库

Vue 3 与 TypeScript 日常学习，两个子项目：

| 目录 | 内容 |
|------|------|
| [myvuetest](./myvuetest/) | Vue 3 Composition API 学习（`<script setup>` 语法糖） |
| [myTSTest](./myTSTest/) | TypeScript 基础练习（Vite + TS6） |
| [myTSVueTest](./myTSVueTest/) | Vue 3 + TypeScript 联合练习（ref/reactive/computed 类型标注） |

---

# Vue3 学习笔记

Vue 3 Composition API 练习，使用 `<script setup>` 语法糖。

## 学习路线

### 01 — Setup 语法糖
`<script setup>` 基础、`ref()` 响应式变量、`@click` 事件绑定。

### 02 — Reactive / Ref / Computed
`reactive()` 定义响应式对象、`computed()` 计算属性，对比 `ref` 与 `reactive` 的使用差异。

### 03 — Watch 侦听器
`watch()` 侦听 ref 对象变化、`{deep: true}` 深度侦听、通过 JSON 深拷贝保存旧值快照。

### 05 — 生命周期钩子
`onMounted` / `onBeforeUpdate` / `onUpdated` / `onBeforeUnmount` 四个核心钩子，使用 SCSS 编写样式。

### 06 — 组件传值（Props & Emits）
父组件通过 `:msg` 向子组件传值（Props），子组件通过 `$emit` 向父组件发送事件（Emits）。

### 07 — 模板 Ref 与 defineExpose
`ref` 绑定子组件实例，`defineExpose()` 暴露子组件内部方法和数据给父组件调用。

### 08 — 小案例：自动聚焦输入框
综合练习：模板 ref + `onMounted` 实现页面加载后自动聚焦 input。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3.5 (Composition API) |
| 构建 | Vite 8 |
| 路由 | Vue Router 5 |
| 状态 | Pinia 3 |
| 样式 | SCSS |
| 测试 | Vitest + Playwright |
| 工具 | ESLint + Prettier + Oxlint |

## 快速开始

```sh
# Vue 3 学习项目
cd myvuetest
npm install
npm run dev

# TypeScript 练习
cd myTSTest
npm install
npm run dev

# Vue 3 + TypeScript 联合练习
cd myTSVueTest
npm install
npm run dev
```
