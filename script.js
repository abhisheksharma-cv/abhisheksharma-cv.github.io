const root=document.documentElement;
const themeButton=document.querySelector('#theme');
function setTheme(theme){root.dataset.theme=theme;themeButton.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);}
try{setTheme(localStorage.getItem('portfolio-theme')==='dark'?'dark':'light');}catch{setTheme('light');}
themeButton.addEventListener('click',()=>{const theme=root.dataset.theme==='dark'?'light':'dark';setTheme(theme);try{localStorage.setItem('portfolio-theme',theme);}catch{}});
const filters=[...document.querySelectorAll('[data-filter]')];
const papers=[...document.querySelectorAll('.paper')];
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(item=>{const selected=item===button;item.classList.toggle('selected',selected);item.setAttribute('aria-pressed',String(selected));});let count=0;papers.forEach(paper=>{paper.hidden=button.dataset.filter!=='all'&&paper.dataset.topic!==button.dataset.filter;if(!paper.hidden)count++;});document.querySelector('#filter-status').textContent=`Showing ${count} publications.`;}));
