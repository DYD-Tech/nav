# 模型 API 与额度

页面 `ai` / 小栏目「模型 API 与额度」（本轮新增）。最后更新 **2026-10-28**。首页 5 项、付费 4 项、待甄选 1 项。

## 为什么新增

「有免费额度、可以自己调模型」是一类独立资源：面向要动手做东西的人，和聊天助手用途不同。开发栏目的「API 与数据」讲的是通用公共 API 与 Postman 这类工具，两者不重叠。

## 首页（都确认存在**长期**免费层，而非一次性赠送）

| 条目 | 官方依据（2026-10-28） |
| --- | --- |
| Google AI Studio | `aistudio.google.com` 200（跳 `/welcome`，标题「Google AI Studio / Build with the Gemini API」）；`ai.google.dev/gemini-api/docs/rate-limits` 200 的使用层表列有「免费」层，说明文字明确「从免费层级升级到第 1 层级通常会立即生效」 |
| OpenRouter | `openrouter.ai/pricing` 200，Free 档原文「25+ free models」「4 free providers」「Rate limits 50 requests/day」「Community support」 |
| Groq | `console.groq.com` 200（跳 `/home`，标题「GroqCloud」）；`console.groq.com/docs/rate-limits` 200 有「Free Plan Limits / Developer Plan Limits」两张表 |
| Cloudflare Workers AI | `developers.cloudflare.com/workers-ai/platform/pricing/` 200，原文「Workers AI is included in both the Free and Paid Workers plans… Our free allocation allows anyone to use a total of 10,000 Neurons per day at no charge」 |
| 硅基流动 | `siliconflow.cn/pricing` 200，价格表中多款模型输入/输出标注「免费」（例：Hunyuan-MT-7B、PaddleOCR-VL-1.5） |

## 更多 · 付费优质平台

| 条目 | 判据 |
| --- | --- |
| 阿里云百炼 | `aliyun.com/product/bailian` 200，原文「开通阿里云百炼服务的新用户可享专属免费额度」「新人享千万tokens免费试用」。**是一次性赠额，不是长期免费层**，因此按成熟付费服务收录 |
| Mistral API | `mistral.ai/pricing/` 200，同页既有免费的个人助手，也有按量计费的模型 API |
| DeepSeek API | `api-docs.deepseek.com` 200，标题「Your First API Call / DeepSeek API Docs」；按 token 计费、需充值 |
| 火山方舟 | `volcengine.com/product/ark` 返回 200 但正文仅 25 字（前端渲染壳），未取到价格原文，只写「按调用量与吞吐计费，模型清单以站内为准」 |

## 更多 · 免费 · 待甄选

- **Z.ai API Platform**：`z.ai/model-api` 200，标题「Z.ai API Platform — Start building with GLM-5.3」；页面以开发者入口为主，未写清长期免费额度。

## 不收与待核实

- `platform.mistral.ai` 在本机 **DNS 解析失败**（getaddrinfo failed）。这是本地网络问题，不是服务下线，结论只依据能正常访问的 `mistral.ai/pricing`。
- **GitHub Models**：`github.com/features/models` 已跳回 `features/copilot`，独立站页 `models.github.ai` 返回 200 但正文只有 3 字。找不到可核对的产品主页，不收。
- Cerebras：`inference.cerebras.ai` 跳到 `chat.cerebras.ai`（200，正文 20 字壳），推理 API 的免费额度未取到原文，暂不收。
- Hugging Face 已在开发栏目「API 与数据」收录，这里不重复。

## 下次该查什么

1. 火山方舟、Cerebras、Groq 免费层的官方额度原文（三站都靠前端渲染，需要用浏览器读）。
2. Gemini API 免费层与付费层的分界（页面按支出分层，规则会变）。
3. 硅基流动「免费」模型是否会转收费——它同时存在按时段计费的价格行。
