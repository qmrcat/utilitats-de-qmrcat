(() => {
  'use strict';
  const tools = window.UTILITIES || [];
  const grid = document.querySelector('#tool-grid');
  const search = document.querySelector('#search');
  const sort = document.querySelector('#sort');
  const filters = document.querySelector('#filters');
  const results = document.querySelector('#results-count');
  let category = '';
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('ca');
  const icons = {
    grid: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
    bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-8z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    watermark: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m5 17 6-6 7 7M15 3l6 6M14 6l4 4M3 8l5-5"/>',
    dice: '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r=".8"/><circle cx="16" cy="8" r=".8"/><circle cx="12" cy="12" r=".8"/><circle cx="8" cy="16" r=".8"/><circle cx="16" cy="16" r=".8"/>',
    lock: '<rect x="4" y="10" width="16" height="12" rx="3"/><path d="M7 10V7a5 5 0 0 1 10 0v3M12 15v3"/>',
    markdown: '<path d="M3 18V6l5 6 5-6v12M17 13l3 4 3-4M20 6v11"/>',
    tool: '<path d="M14 6a5 5 0 0 0-6 6L2 18l4 4 6-6a5 5 0 0 0 6-6l-4 4-4-4z"/>'
  };
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function safeUrl(value) {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; }
  }
  function externalLink(label, url, className, accessibleLabel) {
    const link = element('a', className, label);
    const href = safeUrl(url);
    if (href) { link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    link.setAttribute('aria-label', `${accessibleLabel} (s’obre en una pestanya nova)`);
    return link;
  }
  function createCard(tool, index) {
    const card = element('article', 'tool-card');
    card.id = tool.id;
    const colors = ['orange', 'amber', 'green', 'blue', 'purple', 'rose', 'teal'];
    card.dataset.color = colors.includes(tool.color) ? tool.color : 'orange';
    const top = element('div', 'card-top');
    const icon = element('span', 'tool-icon');
    icon.setAttribute('aria-hidden', 'true');
    // Only fixed, local SVG paths enter innerHTML; catalog text uses textContent.
    icon.innerHTML = `<svg viewBox="0 0 24 24">${icons[tool.icon] || icons.tool}</svg>`;
    top.append(icon, element('span', 'card-category', tool.category));
    const heading = element('h3');
    heading.append(externalLink(tool.name, tool.url, 'tool-link', `Obre ${tool.name}`));
    const tags = element('ul', 'tags');
    tags.setAttribute('aria-label', 'Característiques');
    (tool.tags || []).forEach(tag => tags.append(element('li', '', tag)));
    const bottom = element('div', 'card-bottom');
    bottom.append(element('span', 'open-label', 'Obre l’eina ↗'), externalLink('Codi font', tool.repository, 'source-link', `Codi font de ${tool.name} a GitHub`));
    card.append(top, heading, element('p', 'card-description', tool.description), tags, bottom);
    return card;
  }
  const categories = ['', ...new Set(tools.map(tool => tool.category))];
  categories.forEach(value => {
    const button = element('button', 'filter', value || 'Totes les eines');
    button.type = 'button';
    button.dataset.category = value;
    button.setAttribute('aria-pressed', String(value === category));
    const count = value ? tools.filter(tool => tool.category === value).length : tools.length;
    button.append(element('span', 'filter-count', count));
    button.addEventListener('click', () => {
      category = value;
      render();
    });
    filters.append(button);
  });
  function render() {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let matches = tools.filter(tool => {
      const text = normalize([tool.name, tool.description, tool.category, ...(tool.tags || []), ...(tool.keywords || [])].join(' '));
      return (!category || tool.category === category) && terms.every(term => text.includes(term));
    });
    if (sort.value === 'name') matches = [...matches].sort((a, b) => a.name.localeCompare(b.name, 'ca'));
    const fragment = document.createDocumentFragment();
    matches.forEach((tool, index) => fragment.append(createCard(tool, index)));
    grid.replaceChildren(fragment);
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    results.textContent = `${matches.length} ${matches.length === 1 ? 'eina disponible' : 'eines disponibles'}${category ? ` · ${category}` : ''}`;
    document.querySelector('#empty-state').hidden = matches.length !== 0;
  }
  search.addEventListener('input', render);
  sort.addEventListener('change', render);
  document.querySelector('#reset-filters').addEventListener('click', () => {
    search.value = ''; category = ''; sort.value = 'default'; render(); search.focus();
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, select, [contenteditable]')) {
      event.preventDefault(); search.focus();
    }
    if (event.key === 'Escape' && document.activeElement === search) { search.value = ''; render(); }
  });
  document.querySelector('#total-count').textContent = tools.length;
  document.querySelector('#catalog-controls').hidden = false;
  render();
})();
