# WebDAV 网盘

栏目位置：网盘 → WebDAV 网盘（首页 3 项，弹窗 6 项：付费优质平台 1 项、免费 · 待甄选 5 项）。核对日期 **2026-10-28**。

## 为什么立"WebDAV"而不是"同步盘"

提出的问题：坚果云主要做同步盘和 WebDAV，同步盘要不要单独立一栏（OneDrive、Dropbox 看起来也主要是同步盘）。结论是**不立同步盘，立 WebDAV**，理由三条：

- **"同步"这个维度没有区分度。** Google Drive、OneDrive、Dropbox、iCloud、坚果云的默认用法都是把文件夹同步到本机，真按"同步盘"立栏，收进来的还是国际网盘那几家，等于同一批服务换个名字再排一次。
- **有区分度的是"能不能被别的程序当后端"。** 笔记（Joplin、Notability）、文献管理（Zotero）、备份（Duplicati、FolderSync）、NAS（群晖、威联通）以及"把网盘挂成本地盘"这类需求，都要求服务端暴露一个通用协议入口，而 WebDAV 就是这个入口的通用名字。判此一条只看"官方有没有给出 WebDAV 端点文档"，可核也便于下次重核。
- **坚果云因此从"国内网盘 · 待甄选"提到首页。** 它的 WebDAV 是官方功能，帮助中心专写一篇《坚果云第三方应用授权WebDAV开启方法》，标题里"同步盘"与"WebDAV"并列正是用户判断的依据。

边界：Syncthing、FreeFileSync 这类只做设备之间同步、不对外提供 WebDAV 的工具不是网盘，本页不收。

## 首页条目

| 条目名 | 结论 | 证据（官方，本轮抓取） | 条件与风险 |
| --- | --- | --- | --- |
| 坚果云 Nutstore | 首页（由国内网盘 · 待甄选提上来） | 帮助中心 `help.jianguoyun.com/?p=2064`："第三方应用授权是指用户通过给予一个应用访问用户文件的授权，使其可以通过 **WebDAV 协议**上传，下载和管理用户的文件内容"；端点 `https://dav.jianguoyun.com/dav/` 实测 PROPFIND 返回 **HTTP 401**（在线、要求鉴权） | WebDAV 侧限制写在同一页：单次上传默认 **500M**、**免费版每 30 分钟不超过 600 次请求**（付费 1500 次）、单次请求文件数 **750 个**且未按分页加载的工具会同步不完整；密码用的是"应用密码"而非登录密码。首页简介不写额度，流量计量（免费版"Upload 1 GB / Month""Download 3 GB / Month"）写在本文与弹窗资料里 |
| pCloud | 首页（由加密与隐私云盘 · 待甄选提上来） | `help.pcloud.com/article/connect-to-pcloud-using-webdav-and-rsync`："pCloud supports WebDAV, rsync, SFTP, and SCP connections"、"**These connection options are available for all pCloud plans, including free and paid accounts**"、服务器 US `https://webdav.pcloud.com` / EU `https://ewebdav.pcloud.com` 端口 443；`webdav.pcloud.com` 实测返回 **HTTP 401** | 同一页写着"WebDAV is best for smaller transfers… not recommended for very large"，以及"Crypto Folder cannot be accessed through WebDAV or rsync"（加密保险箱只能走官方客户端）。**条款反复**：Zotero 论坛 2022-02-09 有帖称 "From February 11th onwards, WebDAV will be only available for pCloud Premium users"，与现行官方帮助页相反，本栏以带日期的官方页为准，但这类入口随时可能重新收窄 |
| Koofr | 首页（从加密与隐私云盘移入） | `koofr.eu/help/koofr_with_webdav/how-do-i-connect-a-service-to-koofr-through-webdav/`："There are a few services that work with Koofr through WebDAV - **Zotero**, **Duplicati** for Windows/Linux/macOS, **QNAP and Synology backups**"、"**You will not be able to set up a WebDAV connection, without using an application-specific password**"、Host `https://app.koofr.net/dav/Koofr`；该地址实测返回 **HTTP 401** | 必须用应用专用密码，且主机名区分大小写；永久免费的说法来自官网首页"the first 10 GB are free forever"（上一条网盘记录已核），本条只补 WebDAV 资格 |

## 更多 · 付费优质平台

- **HiDrive**：`hidrive.com` 跳到 STRATO 的产品页 `www.strato.de/cloud-speicher/`（正文 20696 字）："Zugriffsmöglichkeiten sind **SFTP, WebDAV, SMB, rsync, SCP und Git**. Im **Business Essential und Standard Tarif** sind die Zugriffsmöglichkeiten WebDAV und SMB inklusive."，Advanced/Premium 档含全部入口。放付费栏：WebDAV 明确挂在商用套餐上；该页为德语，价格与免费档本轮未读到，条目里不写价格。

## 更多 · 免费 · 待甄选

- **Nextcloud**：`docs.nextcloud.com/server/latest/user_manual/en/files/access_webdav.html`（正文 22332 字）："**Nextcloud fully supports the WebDAV protocol**"，第三方客户端地址 `/remote.php/dav/files/USERNAME/`，并提醒"When using third-party WebDAV clients… you should use an application password"；同页列出 Windows 已知问题（要从注册表调 `FileSizeLimitInBytes` 才能传大文件）与"available free space 显示不准，因为 WebDAV 本身取不到剩余空间"。放待甄选：要自备服务器，且 WebDAV 只是它众多入口之一。
- **Seafile**：`www.seafile.com/features/`："集成 Seafile 包含 **WebDAV 接口**。你可以通过该接口和其他移动应用集成"；`manual.seafile.com/11.0/extension/webdav/` 给出地址 `http://example.com:8080/seafdav`，并写明"there are some **known performance limitation** when you map a Seafile webdav server as a local file system"、"Uploading large number of files at once is usually much slower than the syncing"、Finder 的 WebDAV 支持"not very stable and slow"，建议改用 Cyberduck。放待甄选：主体自建，WebDAV 性能由官方自己打过折扣。
- **MyDrive**：`www.mydrive.ch/en/`（正文 34902 字）"Your files are automatically synchronized **via a WebDAV drive in the cloud**"、"Discover **MyDrive WebDAV** - your cloud like a local drive! Edit files directly in Windows Explorer, MAC Finder or under Linux"；`webdav.mydrive.ch` 实测返回 **HTTP 401**。由国际网盘 · 待甄选移入本栏（同一产品不重复收）；免费说法是"Register and test for free - as long as you like"，未列容量，故不进首页。
- **rclone**：`rclone.org`："serves these over **SFTP, HTTP, WebDAV, FTP and DLNA**"、"mount remote cloud storage as a network disk"、"mature, open-source software originally inspired by rsync and written in Go"。放待甄选：它自己不存文件，是把别家网盘变成盘符/再对外提供 WebDAV 的桥，要自己在电脑上运行。
- **RaiDrive**：`www.raidrive.com/pricing` 标题即"**Pricing – Free Standard Plan and 14-Day Trial**"，Standard 免费档 "8 Drives" 且含广告，可写清单为"Google Drive OneDrive Dropbox **WebDAV, SFTP, FTP**"，Filen、Koofr、pCloud、MEGA 等列在只读清单；首页口号 "Mount a Cloud Storage like a USB drive"，覆盖 Windows 与 Linux。放待甄选：桌面挂载工具，免费档有挂载位数量与广告限制。

## 不收 / 待核实

- **Internxt**：`help.internxt.com/en/articles/9178044`（页面自标 2025-08-26）"Yes, Internxt supports WebDAV"，但同页写"**To get started, you must download the Internxt CLI**"、"The WebDAV feature uses a **local-only server in your machine** when enabled thanks to our CLI"。它给的是本机起的 WebDAV，不是厂商托管端点，第三方应用换台电脑就连不上，因此不收进本栏，仍留在加密与隐私云盘首页。
- **Filen**：`filen.io/pricing`（去标签正文 2594 字）通篇没有 WebDAV 字样，命中的都是 Pro 套餐与 "Client side encryption / Syncing / Network drive"；RaiDrive 也只把 Filen 列进只读清单。没有找到官方 WebDAV 文档，不收。
- **Box、IDrive**：中文聚合清单列了 `https://dav.box.com/dav`，实测 TLS 握手直接 EOF（未取得 401，端点情况不明）；`https://dav.idrivesync.com/` 超时。两家已分别在本页"国际网盘 · 付费优质平台"，按"同一产品不重复收"暂不移栏，等拿到官方 WebDAV 文档再评估归属。
- **聚合清单里的第三方网关不能当官方证据**：`banzhuti.com/webdav-wangpan.html`（自标"3年前更新"）给 Dropbox 写的地址是 `https://dav.dropdav.com/`，域名不是 Dropbox 自有；同表给 iCloud 写的 `http://icloud.com/en/webdav` 也没有任何官方出处。转抄清单只用于列候选。
- **端点今天在线、但免费条款本轮未核**（下次先核免费容量与"WebDAV 是否对所有套餐开放"再决定收录）：4shared `webdav.4shared.com` → HTTP 401；Yandex Disk `webdav.yandex.com` → HTTP 401；TeraCloud `nanao.teracloud.jp/dav/` → HTTP 401；CloudMe `webdav.cloudme.com` → HTTP 401。
- **已经取不到地址的候选**：`dav.memopal.com` DNS 解析失败（清单里仍写着 3GB 免费）。
- **未做的验证**：本轮没有用真实账号跑完整的 PROPFIND/读写链路，401 只能证明端点在线且要求鉴权，不能证明各家客户端兼容性；各家免费账号实际能否建目录、断点续传表现如何，留待注册后实测。
