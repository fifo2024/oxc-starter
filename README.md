# Vite + React + OXC 脚手架

基于 [Vite](https://vitejs.dev) + [React](https://react.dev) + [OXC](https://oxc.rs) 工具链的现代前端脚手架。

## 工具链说明

| 工具 | 用途 |
|------|------|
| **Vite 6** | 构建工具 / Dev Server |
| **@vitejs/plugin-react-oxc** | 用 OXC Transform 替代 Babel，极速 JSX/TS 转译 |
| **oxlint** | 基于 Rust 的超快 Linter（兼容 ESLint 规则） |
| **oxfmt** | 基于 OXC 的代码格式化工具 |
| **TypeScript 5** | 类型检查 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产包
npm run build

# 预览生产包
npm run preview
```

## 代码质量命令

```bash
# Lint（报错即退出）
npm run lint

# 自动修复 Lint 问题
npm run lint:fix

# 格式化代码
npm run format

# 检查格式化（CI 用）
npm run format:check

# 完整检查（格式 + Lint）
npm run check
```

## 项目结构

```
├── public/               # 静态资源
├── src/
│   ├── components/       # 组件
│   ├── styles/           # 全局/模块样式
│   ├── utils/            # 工具函数
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .oxlintrc.json        # oxlint 配置
├── .oxfmtrc.json         # oxfmt 配置
├── .vscode/              # VSCode 推荐设置
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## VSCode 集成

安装推荐插件后，保存时自动格式化和 Lint 修复：

- **oxc.oxc-vscode** — 提供 oxlint + oxfmt 的编辑器集成

## CI 推荐流程

```yaml
- run: npm ci
- run: npm run check    # 格式检查 + Lint
- run: npx tsc --noEmit # 类型检查
- run: npm run build
```
