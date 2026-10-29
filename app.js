const $ = (s, scope = document) => scope.querySelector(s);
const engineStorageKey = 'freenav-visible-engines-v1';
let data;
const detectedLocale = (navigator.languages || [navigator.language || 'en']).some(x => x.toLowerCase().startsWith('zh')) ? 'zh' : 'en';
let locale = localStorage.getItem('freenav-locale') || detectedLocale;
const fallbackCopy = { zh: { brand: 'Prism 棱镜', brandSub: '免费资源聚合导航站', footer: '一个更从容的<br>网页起点。', search: '搜索', query: '输入任何想找的事物', editSearch: '编辑搜索', searchHome: '主页搜索', chooseEngines: '选择搜索引擎', searchDescription: '勾选要显示在主页上的搜索引擎。列表第一项会成为默认搜索。', showOnHome: '显示在主页上', save: '保存', cancel: '取消', common: '常用入口', legal: '收录平台均指向其官方网站。免费资格与使用范围以各平台当前条款为准。', noEngine: '请至少保留一个搜索引擎。' }, en: { brand: 'Prism 棱镜', brandSub: 'Curated free web resources', footer: 'A calmer<br>place to begin.', search: 'Search', query: 'Search for anything', editSearch: 'Edit search', searchHome: 'Homepage search', chooseEngines: 'Choose search engines', searchDescription: 'Choose the engines shown on your homepage. The first becomes your default search.', showOnHome: 'Show on homepage', save: 'Save', cancel: 'Cancel', common: 'Everyday essentials', legal: 'All links point to official platforms. Free access and usage terms are subject to each provider’s current policy.', noEngine: 'Keep at least one search engine selected.' } };
const t = key => (data?.ui?.[locale] || data?.ui?.en || fallbackCopy[locale])[key] || fallbackCopy[locale][key] || key;
const local = (item, key) => item[`${key}${locale === 'zh' ? 'Zh' : 'En'}`] || (locale === 'en' && key === 'description' ? 'A trusted legal online resource.' : '') || (locale === 'en' && key === 'tag' ? 'Resource' : '') || item[key] || '';

function defaultVisibleEngines() { return locale === 'zh' ? ['bing', 'google', 'brave', 'duckduckgo'] : ['google', 'bing', 'brave', 'duckduckgo']; }
function loadVisibleEngines() { try { const saved = JSON.parse(localStorage.getItem(engineStorageKey)); if (Array.isArray(saved) && saved.length) return saved.filter(id => data.searchEngines.some(engine => engine.id === id)); } catch {} return defaultVisibleEngines(); }
function visibleEngines() { return loadVisibleEngines().map(id => data.searchEngines.find(engine => engine.id === id)).filter(Boolean); }
function allSearchEngines() { return data.searchEngines; }
function renderLanguages() { const menu = $('#languageMenu'); menu.replaceChildren(...data.languages.map(language => { const option = document.createElement('button'); option.type = 'button'; option.className = 'language-option'; option.dataset.locale = language.id; option.setAttribute('role', 'menuitemradio'); option.setAttribute('aria-checked', String(language.id === locale)); option.textContent = language.label; option.addEventListener('click', () => { closeLanguageMenu(); if (language.id !== locale) applyLocale(language.id); }); return option; })); }
function openLanguageMenu() { $('#languageMenu').hidden = false; $('#languageTrigger').setAttribute('aria-expanded', 'true'); ($('#languageMenu').querySelector('[aria-checked="true"]') || $('#languageMenu').firstElementChild)?.focus(); }
function closeLanguageMenu(returnFocus = false) { $('#languageMenu').hidden = true; $('#languageTrigger').setAttribute('aria-expanded', 'false'); if (returnFocus) $('#languageTrigger').focus(); }
function renderStudioLink() { const studio = data.studio; const anchor = $('#studioLink'); anchor.href = studio.url; anchor.setAttribute('aria-label', local(studio, 'visit')); anchor.title = local(studio, 'visit'); $('#studioName').textContent = local(studio, 'name'); }
function bindLanguageMenu() {
  $('#languageTrigger').addEventListener('click', () => { $('#languageMenu').hidden ? openLanguageMenu() : closeLanguageMenu(true); });
  document.addEventListener('click', event => { if (!$('#languageMenu').hidden && !event.target.closest('#languagePicker')) closeLanguageMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#languageMenu').hidden) closeLanguageMenu(true); });
}
function renderNav() { const items = [`<a class="nav-item" href="#home" data-page="home"><span class="nav-icon">⌕</span>${t('search')}</a>`]; data.pages.filter(page => page.id !== 'home').forEach(page => items.push(`<a class="nav-item" href="#${page.id}" data-page="${page.id}"><span class="nav-icon">${page.icon}</span>${local(page, 'title')}</a>`)); $('#nav').innerHTML = items.join(''); }
function markActive(pageId) { document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.page === pageId)); }
function card(link) { const anchor = document.createElement('a'); anchor.className = 'link-card'; anchor.href = link.url; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; anchor.textContent = local(link, 'name'); anchor.title = local(link, 'name'); return anchor; }
function groupLabel(group) { const labels = data.groupLabels?.[group]; return labels?.[locale] || labels?.en || group; }
function groupedLinks(pageId) { const links = data.links.filter(link => link.page === pageId); const order = []; const map = {}; links.forEach(link => { const g = link.group || ''; if (!map[g]) { map[g] = []; order.push(g); } map[g].push(link); }); return order.map(g => ({ group: g, links: map[g] })); }
function moreCopy(key) { return data.moreUi?.[locale]?.[key] || data.moreUi?.en?.[key] || key; }
function bindResourceGroups() {
  document.querySelectorAll('.resource-subtitle-trigger').forEach(button => {
    const group = groupedLinks(button.dataset.page)[Number(button.dataset.groupIndex)].group;
    button.setAttribute('aria-label', `${groupLabel(group)} · ${moreCopy('more')}`);
    button.title = moreCopy('more');
    button.addEventListener('click', () => openMore(data.moreCollections.find(item => item.page === button.dataset.page && item.group === group)));
  });
}
function openMore(collection) {
  const dialog = $('#moreDialog'); $('#moreTitle').textContent = moreCopy('more'); $('#closeMore').setAttribute('aria-label', moreCopy('close'));
  const content = $('#moreContent'); content.replaceChildren();
  const categories = collection ? collection.categories.filter(category => category.items.length > 0) : [];
  if (categories.length === 0) { const empty = document.createElement('p'); empty.className = 'more-empty'; empty.textContent = moreCopy('empty'); content.append(empty); }
  categories.forEach(category => {
    const section = document.createElement('section'); section.className = 'more-category';
    const heading = document.createElement('h3'); heading.textContent = local(category, 'title'); section.append(heading);
    const list = document.createElement('div'); list.className = 'more-list';
    category.items.forEach(item => {
      const anchor = document.createElement('a'); anchor.className = 'more-item'; anchor.href = item.url; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';
      const name = document.createElement('span'); name.className = 'more-item-name'; name.textContent = local(item, 'name');
      const description = document.createElement('span'); description.className = 'more-item-description'; description.textContent = local(item, 'description');
      anchor.append(name, description); list.append(anchor);
    }); section.append(list); content.append(section);
  });
  dialog.showModal(); dialog.scrollTop = 0;
}

function renderHome(page) {
  const engines = allSearchEngines(); const defaultEngine = data.searchEngines.find(engine => engine.id === 'google') || engines[0];
  return `<section class="page" id="home"><header class="heading"><p class="eyebrow">${local(page, 'eyebrow')}</p><h1>${local(page, 'headline')}</h1></header><section class="search-panel"><form id="searchForm"><div class="search-row"><input class="search-box" id="query" autocomplete="off" placeholder="${t('query')}" aria-label="${t('query')}"><button class="primary-btn" type="submit">${local(defaultEngine, 'name')}</button></div></form><div class="engine-actions">${engines.map(engine => `<button class="engine-search" type="button" data-engine="${engine.id}"><i class="engine-dot" style="background:${engine.tone}"></i>${local(engine, 'name')}</button>`).join('')}</div></section></section>`;
}
function renderResource(page) { const groups = groupedLinks(page.id); const intro = page.id === data.pages.find(item => item.id !== 'home')?.id ? `<p class="resource-intro"><strong>${local(data.resourceIntro, 'lead')}</strong> <span>${local(data.resourceIntro, 'text')}</span></p>` : ''; const body = groups.length === 1 && !groups[0].group ? `<div class="link-grid" id="links-${page.id}"></div>` : groups.map((g, i) => `<section class="resource-group">${g.group ? `<h3 class="resource-subtitle"><button class="resource-subtitle-trigger" type="button" data-page="${page.id}" data-group-index="${i}" aria-haspopup="dialog" aria-controls="moreDialog">${groupLabel(g.group)}</button></h3>` : ''}<div class="link-grid" id="links-${page.id}-${i}"></div></section>`).join(''); return `<section class="page resource-page" id="${page.id}">${intro}<div class="resource-panel"><header class="resource-header"><h2 class="section-title">${local(page, 'title')}</h2></header><div class="resource-body">${body}</div></div></section>`; }

function bindSearch() { const defaultEngine = data.searchEngines.find(engine => engine.id === 'google') || data.searchEngines[0]; $('#searchForm').addEventListener('submit', event => search(event, defaultEngine.id)); document.querySelectorAll('[data-engine]').forEach(button => button.addEventListener('click', () => search(null, button.dataset.engine))); }
let sectionObserver;
function observeSections() { sectionObserver?.disconnect(); sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) markActive(entry.target.id); }), { rootMargin: '-40% 0px -55% 0px' }); document.querySelectorAll('#app .page').forEach(section => sectionObserver.observe(section)); }
function render() { $('#app').innerHTML = data.pages.map(page => page.id === 'home' ? renderHome(page) : renderResource(page)).join(''); data.pages.forEach(page => { const groups = groupedLinks(page.id); groups.forEach((g, i) => { const id = groups.length === 1 && !g.group ? `links-${page.id}` : `links-${page.id}-${i}`; const container = $(`#${id}`); if (container) g.links.forEach(link => container.append(card(link))); }); }); renderNav(); bindSearch(); bindResourceGroups(); observeSections(); markActive(location.hash.slice(1) || 'home'); }
function applyLocale(nextLocale) { locale = nextLocale; localStorage.setItem('freenav-locale', locale); document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'; $('.brand-name').textContent = t('brand'); $('.brand-sub').textContent = t('brandSub'); document.title = `${t('brand')} — ${t('brandSub')}`; $('#nav').setAttribute('aria-label', locale === 'zh' ? '页面导航' : 'Navigation'); $('#languageTriggerLabel').textContent = t('language'); $('#languageMenu').setAttribute('aria-label', t('language')); renderLanguages(); renderStudioLink(); $('#searchEyebrow').textContent = t('searchHome'); $('#searchDialogTitle').textContent = t('chooseEngines'); $('#searchDialogCopy').textContent = t('searchDescription'); $('#engineLegend').textContent = t('showOnHome'); $('#cancelSearchSettings').textContent = t('cancel'); $('#saveSearchSettings').textContent = t('save'); render(); }
function search(event, engineId) { event?.preventDefault(); const query = $('#query').value.trim(); const engine = data.searchEngines.find(item => item.id === engineId); if (!engine) return; if (!query) { window.open(new URL(engine.url).origin, '_blank', 'noopener'); return; } window.open(engine.url.replace('{query}', encodeURIComponent(query)), '_blank', 'noopener'); }
function openSearchDialog() { const selected = loadVisibleEngines(); $('#enginePicker').innerHTML = data.searchEngines.map(engine => `<label class="engine-option"><input type="checkbox" value="${engine.id}" ${selected.includes(engine.id) ? 'checked' : ''}><i class="engine-dot" style="background:${engine.tone}"></i>${engine.name}</label>`).join(''); $('#searchDialog').showModal(); }
function saveSearchSettings(event) { event.preventDefault(); if (event.submitter?.value === 'cancel') { $('#searchDialog').close(); return; } const selected = [...document.querySelectorAll('#enginePicker input:checked')].map(input => input.value); if (!selected.length) { showToast(t('noEngine')); return; } localStorage.setItem(engineStorageKey, JSON.stringify(selected)); $('#searchDialog').close(); render(); }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 3800); }
async function init() { data = await fetch('data/resources.json', { cache: 'no-store' }).then(response => response.json()); if (!data.languages.some(language => language.id === locale)) locale = 'en'; bindLanguageMenu(); $('#searchSettingsForm').addEventListener('submit', saveSearchSettings); applyLocale(locale); if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView(); }
$('#closeMore').addEventListener('click', () => $('#moreDialog').close());
$('#moreDialog').addEventListener('click', event => { if (event.target !== event.currentTarget) return; const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close(); });
init();
