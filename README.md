# xiaodeng-knowledgebase

小登知识库是一个多站点知识库项目：

- `/`：知识库主页 landing page
- `/life/`：生活篇 VitePress 文档站
- `/work/`：工作篇 VitePress 文档站
- `/fun/`：游戏区 VitePress 文档站
- `/leisure/`：娱乐休闲区 VitePress 文档站
- `/insurance/`：保险实习库 VitePress 文档站

## Development

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm run build
corepack pnpm preview
```

构建产物会输出到 `.output/`，用于 Vercel 或 Cloudflare Pages 部署。

## Markdown Components

所有 VitePress 文档站都可以直接在 Markdown 中插入 B 站视频：

```md
<BiliVideo bvid="BV1xx411c7mD" title="视频标题" />

<BiliVideo
  bvid="BV1xx411c7mD"
  :page="1"
  :danmaku="false"
  :time="60"
/>
```
