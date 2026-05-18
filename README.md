# xiaodeng-knowledgebase

小登知识库是一个多站点知识库项目：

- `/`：知识库主页 landing page
- `/life/`：生活篇 VitePress 文档站
- `/work/`：工作篇 VitePress 文档站
- `/fun/`：游戏区 VitePress 文档站
- `/leisure/`：娱乐休闲区 VitePress 文档站

## Development

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm run build
corepack pnpm preview
```

构建产物会输出到 `.output/`，用于 Vercel 或 Cloudflare Pages 部署。
