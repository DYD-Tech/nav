# FreeNav / 巡航

一个可部署到 GitHub Pages 的个人浏览器主页。它把常用入口、可编辑的主页搜索引擎和按主题整理的合法免费资源放在同一处。网站会自动使用中文或英文：浏览器偏好语言含中文时显示中文，其他语言显示英文；侧栏中的语言下拉菜单可手动覆盖并记住选择。可用语言和全部界面文案均在 `data/resources.json` 中定义，增加语言不需要修改页面结构。

## 本地预览

这是零依赖静态站点：直接用浏览器打开 `index.html`，或在项目目录执行 `python -m http.server 8080` 后访问 `http://localhost:8080`。

## 部署 GitHub Pages

推送此目录到 GitHub 仓库后，在 **Settings → Pages** 将 Source 设为 **GitHub Actions**。之后每次推送到 `main` 都会由随附的部署工作流发布网站。

## 内容维护

所有站点条目、分类、双语内容与搜索引擎均在 `data/resources.json` 中维护；界面逻辑不会写死资源站。用户选择显示在主页上的搜索引擎保存在浏览器本地存储中。
