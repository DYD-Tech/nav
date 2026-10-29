# AI 搜索与研究

页面 `ai` / 小栏目「AI 搜索与研究」，原名「AI 搜索」。最后更新 **2026-10-28**。首页 4 项、待甄选 3 项、付费 0 项。

## 改名理由

原「AI 搜索」里混着两类不同的活：查即时信息（Perplexity）和啃文献（Semantic Scholar、Elicit）。用户意图不同，名字改成「AI 搜索与研究 / AI Search & Research」。

## 首页

| 条目 | 结论依据（官方页，2026-10-28） |
| --- | --- |
| Perplexity | 站点 200；`perplexity.ai/pricing` 返回 **404**，官方定价页路径已变动，免费档描述沿用原条目，**额度未复核** |
| Gemini Notebook | Google 官方博客 2026-07-16 明确「NotebookLM is now Gemini Notebook」；`https://notebook.google.com/` 实测 200、标题「Gemini Notebook」。**条目名与 URL 已从 NotebookLM 更新** |
| Semantic Scholar | `semanticscholar.org` 200，官方首页原文「A free, AI-powered research tool for scientific literature」，检索量 2.4 亿篇 |
| Elicit | `elicit.org` 301 跳到 `elicit.com`（200），页面原文「Try Elicit for free」，并有「Is Elicit free?」FAQ |

## 更多 · 免费 · 待甄选

| 条目 | 判据 |
| --- | --- |
| Consensus | `consensus.app` 200 但正文仅 76 字（前端壳），`/search/` 对 curl 返回 403。免费与付费边界未拿到原文 |
| You.com | `you.com` 200，标题已变成「You.com / Search and inference for AI」，页面在讲企业搜索、Inference Router 与免费 API Key。**已不是消费级 AI 搜索引擎**，从首页降级到待甄选 |
| Exa | `exa.ai` 200，原文「Try API for free」，主打给智能体用的检索 API，普通用户用不上，故不放首页 |

## 不收与待核实

- **Phind**：`phind.com` HTTP 403（反爬），未取得官方页内容，暂不收。
- Perplexity 的新定价页地址待查（旧 `/pricing` 已 404）。

## 下次该查什么

1. Perplexity 免费档现状与新定价页路径。
2. Consensus 免费与付费功能差异（需要浏览器渲染）。
3. Notebook 改名后是否仍可独立访问 `notebooklm.google.com`（当前会跳转，条目已改用新域名）。
