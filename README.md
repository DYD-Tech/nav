# Prism 棱镜

[懂一点实验室 / DYD Lab.](https://dydlab.com/) 的产品之一。品牌主站入口与语言图标并排，名称随中英文切换。

经过筛选的高质量免费资源导航。首页集中展示免费精选；点击小标题，在“更多”弹窗中浏览对应栏目的付费优质产品和需自行甄选的免费选项。没有补充内容时显示“无 / None”。

## 本地预览

零构建依赖。安装 Python 3 后，在项目目录执行 `python -m http.server 8080`，访问 `http://localhost:8080`。页面通过 HTTP 读取 JSON，请勿直接以 `file://` 打开。

## 内容维护

- 网站、分类、搜索引擎和双语文案维护在 `data/resources.json`，筛选与归类标准见 `AGENTS.md` 的“本项目专用规则”。
- 主页链接在 `links`；弹窗内容在 `moreCollections`，按 `page/group` 绑定对应栏目。弹窗每项须有中英文简介、官方来源和核对日期。
- 搜索有关键词时打开搜索结果，无关键词时打开网站；每次只打开一个标签，输入不清空。
- 支持中英文。侧栏底部只放一个语言图标，不显示当前语言；点开是语言列表，选一项即切换整站文案。浏览器语言自动识别，手动选择记在本机。

## 开发规则与技能

- 通用内容来自 [agent-rules-and-skills](https://github.com/DYD-Tech/agent-rules-and-skills)，由根 `AGENTS.md` 加载 `.agent-rules/agent-rules-and-skills/` 的三份规则；本项目专用规则独立保留。
- 项目技能位于 `.agents/skills/`：`architecture-features-implementation` 用于当前文档维护，`development-log` 用于已完成变更记录，`clear-communication` 每次任务应用。具体触发约定见 AGENTS.md。
- 来源提交、文件哈希和验证状态见 [安装记录](agent-rules-and-skills.lock.json)。安装文件随项目保存，不直接改写通用正文；升级时按指定来源复核差异，普通开发沿用锁定版本。
- 安装历史见 [开发日志](doc/开发日志/CHANGELOG.md)。文件与加载路径已核对，原生技能自动发现需在安装后的新一轮任务确认。

## GitHub Pages

经用户要求推送到 `main` 后，仓库 **Settings → Pages → Source** 选择 **GitHub Actions**，随附工作流会部署静态网站。本地修改不代表已提交、推送或发布。

## 访问统计

`index.html` 在 `</body>` 前引入 Cloudflare Web Analytics 的脚本，这是官方要求的放法：每一页都放在结束 body 标签之前。脚本里的 token 会随页面公开给访问者，不是密钥，可以提交。如果 Cloudflare 后台同时开着自动注入，页面里就会出现两份脚本、浏览量重复计数，上线后要在后台确认只保留手动这一份。本地预览只能验证脚本能否加载，真实数据要在正式域名上看。

产品范围见 `doc/SPEC.md`；弹窗界面与交互见 `doc/more-dialog-design.md`；各栏目“收谁、不收谁”的检索与筛选记录见 `doc/检索与筛选记录/`，可复用经验见 `doc/值得记住的坑/`。
