# 文件与 PDF

栏目位置：实用工具 → 文件与 PDF（首页 3 项，弹窗 6 项：付费优质平台 3 项、免费 · 待甄选 3 项）。核对日期 **2026-10-28**，全部证据为本轮实际抓取（urllib 抓正文，被 403 挡的改用浏览器读 `document.body.innerText`）。

## 本栏判据

实用工具不是基础设施，比对尺度按"服务还活着 + 有没有可持续的免费方案 + 免费方案的边界条件"三条来定，额度数字写进本文与弹窗简介，不写进首页条目。

## 首页条目

| 条目名 | 结论 | 证据（官方，本轮抓取） | 条件与风险 |
| --- | --- | --- | --- |
| PDF24 Tools | 首页（本轮新增） | `tools.pdf24.org/en/`（正文 3206 字）标题 "PDF24 Tools: Free PDF solutions for all PDF problems"，正文 "Free and easy to use PDF tools that make you more productive – online and offline"、"**100% free of charge** You can use all PDF24 tools free of charge and without any restrictions. **This is achieved via some advertising on the web pages.**"、"**No limits** There are no artificial limits at PDF24."；桌面版 `tools.pdf24.org/en/creator` 标题 "PDF24 Creator - Download - **100% free**"，正文 "Free Windows software for private and business use with all PDF24 tools and a PDF printer, **working offline so files stay on your PC**"、"Free No limits Offline … Rated 4.88 out of 5 stars by 132826" | 免费靠广告支撑，所以页面有推广位；"无限制"是官方表述，本轮没有读到并发或文件大小的反向条款。桌面版只有 Windows，离线处理时文件不出本机，这一条对敏感文档是加分项 |
| Stirling PDF | 首页（本轮新增） | `stirlingpdf.com` 跳转到 `stirling.com`（标题 "Stirling PDF - 30M+ Downloads"），正文 "Your PDFs. Your AI. **Stirling is a free, private PDF editor you can run on any infrastructure.**"、"Used by 75% of the Fortune 500"；官方仓库 `github.com/Stirling-Tools/Stirling-PDF` 简介 "#1 PDF Application on GitHub that lets you edit PDFs on any device anywhere"，主题标签含 `self-hosted`，README 给出 `docker.stirlingpdf.com/stirlingtools/stirling-pdf` 与 "For full installation options (including desktop and Kubernetes), see our Documentation Guide" | **开源许可证名称本轮没读到**（仓库页面只回 "Readme License" 这一导航文字，没取到 SPDX），因此简介只写"官方仓库给出 Docker 自建与桌面端安装方式"，不写 GPL 之类结论。首页另有 Pricing 入口，托管版与自建版的免费边界下次要单独核实；"30M+ Downloads"、"75% of the Fortune 500" 属站内自述，不当作质量结论 |
| iLovePDF | 首页（保留，本轮补证） | `ilovepdf.com`（正文 6767 字）标题 "iLovePDF \| Online PDF tools for PDF lovers"，列出 Merge / Split / Compress / Convert 等工具；本轮补抓 `ilovepdf.com/pricing`（正文 9237 字，标题 "Three types of accounts to manage PDF files with our online tools"）："Basic 1 Free Start for free Free features include: **Access to essential iLovePDF tools / Limited document processing**"、"Premium 1 - 25 5 GBP / month … Billed annually" | 官方把免费档明确写成"基础工具 + 有限处理量"，与同厂 iLoveIMG 的免费档表述一致；首页简介按这句改，不再只说"常用工具"。风险：具体每日次数与文件大小上限本轮仍未读到 |

## 更多 · 付费优质平台

- **Adobe Acrobat Online**：`adobe.com/acrobat/online.html` urllib 返回 **403**，改用浏览器读，正文 3984 字，标题 "PDF online: From the creator of PDFs \| Adobe Acrobat"，原文 "**Access free Acrobat online tools to convert, share, fill, and sign documents.**"、"Free trial Try 25+ powerful PDF and e-signing tools for free"，页内同时有 Buy now 与 Free trial 两个入口。放付费栏：在线工具确有免费入口，但完整能力与 25+ 工具按试用→订阅推进，长期免费边界未读到。
- **Smallpdf**：`smallpdf.com`（正文 4443 字）标题 "Smallpdf - A Free Solution to all your PDF Problems"，正文 "All PDF Tools … **30 tools to convert, compress, and edit PDFs for free. Try it out today!**"，同页 "Plans & Pricing … Pro 1 ... /month per user, billed annually. Team 2-100"；本轮补抓 `smallpdf.com/pricing`（正文 7602 字，标题 "Smallpdf Pricing and Plans"）："All the PDF tools you need. **Built in Switzerland.** Trusted by 1.7 billion people since 2013"，免费档列 "30+ document management tools / **Limited document downloads** / Limited mobile app access"，Pro 档写 "Everything in Free, plus: **Unlimited access to all 30+ tools** / Unlimited document downloads"。放付费栏：免费档被官方自己标成"限量下载"，长期用量要转 Pro；"Built in Switzerland / 1.7 billion"属站内自述，只作主体信息不作质量结论。
- **Sejda**：`sejda.com`（正文 14480 字）"Edit Edit PDF files **for free**. Fill & sign PDF."；定价页 `sejda.com/pricing` 跳转到 `sejda.com/upgrade`，正文 "Week Pass £ 5 per user for 7 days"、"Web Monthly £ 7 50 per user per month"、付费方案含 "**Unlimited documents, no page or hourly limits**"、"OCR documents up to 100 pages"，并说明 "Sejda Desktop is an application that you download and install on your computer. **It processes documents on your local computer**"（后半句在抓取窗口里被截断，未取全）。放付费栏：付费档卖点正是"解除页数与小时限制"，反证免费档受限；同一页面还提示刚更新过服务条款。

## 更多 · 免费 · 待甄选

- **CloudConvert**：`cloudconvert.com`（正文 2361 字）"CloudConvert handles **200+ formats** across documents, images, audio, video, archives and more — straight from your browser"；`cloudconvert.com/pricing`（正文 6075 字）"Free For personal use, testing and hobby projects. **€0**"、"**Start free with 10 conversions per day. No credit card required.**"、付费表列出 Max File Size 1 GB / Unlimited 等分档。由首页移入待甄选：每天 10 次的额度撑得起"偶尔用一次"，但作为默认推荐的日常工具不够，首页改由"全部免费、无人为限制"的 PDF24 与可自建的 Stirling 承担。
- **Convertio**：`convertio.co`（正文 2262 字）"Convert your files to any format We've converted 3,191,036,609 files"；`convertio.co/pricing/` 有 "Since we offer a **free tier to all users**, we do not issue refunds…"、按 Lite / Basic / Custom 卖的 "1000 conversion credits per month" 等档位。放待甄选：免费档存在但本轮没读到免费额度具体数值（页面上能确认的都是付费档），不写数字、不进首页。
- **TinyWow**：`tinywow.com`（正文 12974 字）标题 "Free AI Writing, PDF, Image, and other Online Tools"，正文 "All free, no catch"、"Edit an existing PDF and download **with no sign-up required**"；`tinywow.com/pricing` 写 "Upgrade to Premium for: **No advertisements / Skip all CAPTCHAs / Priority processing** for faster results Monthly $20 per month … Continue with Free"。由首页移入待甄选：免费是真的，但官方把"去广告、跳验证码、优先处理"列为付费权益，等于承认免费路径带广告与验证码；这类体验不适合作为默认推荐。

## 不收 / 待核实

- iLovePDF 与 iLoveIMG 的定价页本轮都抓到了，两家的免费档表述一模一样（"Access to essential … tools / Limited document processing"），但**都没有写出具体次数、页数或文件大小**，这类限制通常在登录后的账户页或 FAQ 里，下一轮要补。
- 中文渠道线索：WPS 的图片转 PDF 教程页（`wps.cn/article/DjxXQTq6.html`）与聚合清单（`youronlinetools.com`、`utilstax.com/tools/quick-utilities`、`utilkit.tools`、`arielton.com/tools`、`rebelnetwork.nl/tools.html`、`aservus.com/blog/best-free-pdf-tools-2026`、`tinypdftools.com/blog/best-free-pdf-tools-online-2026`、`easypdf.fr/blog/best-free-pdf-tools-2026`）只用于列候选，没有一篇能当官方证据。
- 未取证、因此不写的候选：PDFelement、Nitro、Docparser。下一轮要收先取官方定价页原文。
