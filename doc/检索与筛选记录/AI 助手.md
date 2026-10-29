# AI 助手

页面 `ai` / 小栏目「AI 助手」，原名「聊天式 AI」。最后更新 **2026-10-28**。首页 9 项、更多·免费待甄选 5 项、付费 0 项。

本轮口径：只判断分类是否成立、站点是否活着、有没有**可持续的免费方案**，没有逐条比额度数字（与开发栏目不同，助手类产品额度变动频繁，写进简介很容易过期）。

## 改名理由

「聊天式 AI」是描述交互形态，不是描述用途，读者无法据此判断该点哪个。改成「AI 助手 / AI Assistants」，与同一页其它按用途划分的小栏目（作图、视频、语音）保持一致。

## 首页保留

| 条目 | 站点状态（2026-10-28 实测） | 免费方案依据 |
| --- | --- | --- |
| ChatGPT | `chatgpt.com` 对非浏览器请求返回 HTTP 403（反爬，站点正常） | 沿用原条目「提供免费使用方案」，本轮未重新核对额度 |
| Claude | `claude.ai` HTTP 403（反爬） | 同上 |
| Gemini | `gemini.google.com` 未复测 | 同上 |
| DeepSeek | `chat.deepseek.com` 未复测 | 同上 |
| 豆包 | `doubao.com` 未复测 | 同上 |
| Microsoft Copilot | 未复测 | 同上 |
| Poe | `poe.com` HTTP 403（反爬） | 聚合多模型，免费层按点数计，本轮未核对 |
| HuggingChat | `huggingface.co/chat/` 未复测 | 开源模型入口 |
| Mistral Le Chat | `chat.mistral.ai` HTTP 403（反爬） | `mistral.ai/pricing/` 官方定价页有 "Free — Your personal AI agent for everyday tasks" |

403 只代表本机 curl 被拦，不代表服务下线；这几个站点的免费额度**仍是待核实项**，下次用浏览器登录后核对。

## 更多 · 免费 · 待甄选（均为 2026-10-28 实测 HTTP 200）

| 条目 | URL | 判据 |
| --- | --- | --- |
| Kimi | `https://www.kimi.com/` | 200，标题「Kimi AI 官网：K3.1 Pro 上线，编程与智能体任务全面升级」；正文仅 125 字，是前端渲染壳，未拿到官方免费条款原文，所以不放进首页 |
| Qwen Chat | `https://chat.qwen.ai/` | 200，标题「Qwen」，正文 294 字壳 |
| Z.ai | `https://chat.z.ai/` | 200，标题「Z.ai - Advanced AI Chatbot & Agent powered by GLM-5.3-Flash」 |
| Grok | `https://grok.com/` | 200，标题「Grok」，正文 104 字壳；免费档有速率限制属常识级信息，官方页未取到原文 |
| 腾讯元宝 | `https://yuanbao.tencent.com/` | 200，正文 36 字，纯壳，功能与额度全靠站内说明 |

## 不收与待核实

- **Meta AI**：`about.meta.com/technologies/meta-ai/` 返回 **HTTP 404**（2026-10-28）。没有可用的官方入口地址，暂不收录，也不猜测新域名。
- 未纳入候选但下轮该看：Perplexity 的 Comet 浏览器、Google 的 Gemini App 独立入口、国产的纳米 AI、讯飞星火。本轮中英两轮检索没有覆盖它们的官方免费条款。

## 下次该查什么

1. 用浏览器逐个登录核对 ChatGPT / Claude / Gemini / DeepSeek / 豆包 / Copilot 的免费档现状（次数、模型可用性、是否已转付费）。
2. Kimi、Qwen、Z.ai、元宝、Grok 拿到官方定价或帮助页原文后，决定是否升首页。
3. Meta AI 的新官方入口。
