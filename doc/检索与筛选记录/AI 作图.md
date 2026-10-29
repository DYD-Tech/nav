# AI 作图

页面 `ai` / 小栏目「AI 作图」。最后更新 **2026-10-28**。首页 4 项、付费 1 项、待甄选 5 项。

## 分类问题与处理

原来这个栏目只有 1 条，而且是 Canva 的一篇 SEO 落地页（`canva.com/ai-image-generator/`），当作「AI 作图」的默认推荐站不住。现把它降级到「更多 · 免费 · 待甄选」，首页换成 4 个真正以图像生成主业的平台。

## 首页

| 条目 | 免费方案依据（官方页，2026-10-28） |
| --- | --- |
| Adobe Firefly | `adobe.com/products/firefly.html` 200，标题「Adobe Firefly - Free Generative AI for Creatives」，FAQ 原文「Yes, Adobe has a free plan that provides users with free daily generations」；页面还说明可调用 Adobe、Google、OpenAI、Kling 等模型 |
| Leonardo | `leonardo.ai/pricing` 对 curl 返回 403，但官方定价页在搜索引擎索引中的原文为「If you're a free user, you're allocated a certain number of tokens each day, and these reset daily」。**每日重置**满足可持续免费，故进首页 |
| Krea | `krea.ai` 200，页面为多个模型标注 Free 通道：Hailuo 2.3 Fast、Wan 2.1 Fast、Wan 2.2 Fast、Krea 1 |
| 即梦 | `jimeng.jianying.com` 200，页面原文「平台免费积分：每日登录赠送积分」，另有「图片4.0 4K 限时免费」等会员活动 |

首页简介只写「有没有每日可用的免费额度」，不抄具体积分数字（这类页面按活动频繁改动）。

## 更多 · 付费优质平台

- **Midjourney**：`docs.midjourney.com` 官方「Free Trials」页原文「No free trial is currently available in Discord or the midjourney.com website」；四档订阅 Basic/Standard/Pro/Mega。收费但成熟，按规则进付费优质。`midjourney.com` 根站对 curl 返回 403。

## 更多 · 免费 · 待甄选

| 条目 | 判据 |
| --- | --- |
| Microsoft Designer | `designer.microsoft.com` 200；`microsoft.com/en-us/microsoft-365/microsoft-designer` 列出 Free 档，同页原文「This product is not available in your market」。**有地区门槛**，不宜作默认推荐 |
| Ideogram | `ideogram.ai/pricing` 200，取到的文案是 Plus「$20」、Subscription/Credits/API；**没有读到免费档描述**，故按现状写订阅与积分，不承诺免费 |
| Canva | `canva.com/ai-image-generator/` 200，标题「Free AI Image Generator: Text to Image / Canva」。属设计平台附带功能，降级到待甄选 |
| Stability AI | `stability.ai` 200（正文 6 KB，无免费额度描述）。开源权重 + 商用 API 计费，网页服务需付费 |
| Black Forest Labs | `bfl.ai` 200，标题「Black Forest Labs - Frontier AI Lab」，FLUX 模型以 API 与合作伙伴分发为主 |

## 不收与待核实

- `ideogram.ai` 与 `leonardo.ai` 根页面对 curl 返回 403，只能通过定价页索引取证；真实免费额度需要浏览器登录后复核。
- 未纳入：国产的美图设计室、TusiArt、哩布哩布 AI（LibLib）等，本轮没有取到它们的官方免费条款原文。

## 下次该查什么

1. Leonardo、Ideogram 免费档的确切限制（队列、并发、商用许可）。
2. Microsoft Designer 在国内/用户所在地区的可用性。
3. 模型下载类站点（LibLib、Civitai）是否属于「平台」收录范围——按现行为准，它们更像模型仓库，需先定口径。
