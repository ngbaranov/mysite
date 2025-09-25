(function(){
  const root = document.documentElement;
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = (localStorage.getItem('theme') || '').toLowerCase();

  function applyTheme(mode){
    root.classList.remove('theme-light', 'theme-dark', 'light');
    if(mode === 'light'){
      root.classList.add('theme-light');
    } else {
      root.classList.add('theme-dark');
    }
    localStorage.setItem('theme', mode);
  }

  // Инициализация: saved -> prefers -> dark
  const initial = (saved === 'light' || saved === 'dark') ? saved : (prefersLight ? 'light' : 'dark');
  applyTheme(initial);

  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    const isLight = root.classList.contains('theme-light');
    applyTheme(isLight ? 'dark' : 'light');
  });

  // Social/contact links placeholders — replace with your links
  const GH = 'https://github.com/ngbaranov';
  const TG = 'https://t.me/Nikolai_Baranov';
  const MAIL = 'mailto:ngbaranov@gmail.com';
  const gh = document.getElementById('ghLink'); if(gh) gh.href = GH;
  const tg = document.getElementById('tgLink'); if(tg) tg.href = TG;
  const ml = document.getElementById('mailLink'); if(ml) ml.href = MAIL;

  // Year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // Projects filtering and search
  const grid = document.getElementById('projectGrid');
  const filters = document.querySelectorAll('.filter');
  const search = document.getElementById('search');
  let current = 'all';
  const items = grid ? Array.from(grid.querySelectorAll('.card')) : [];

  function apply(){
    const q = (search?.value || '').trim().toLowerCase();
    items.forEach(card => {
      const cat = card.dataset.category || 'all';
      const tech = (card.dataset.tech || '').toLowerCase();
      const text = card.textContent.toLowerCase();
      const matchCat = current === 'all' || current === cat;
      const matchSearch = !q || tech.includes(q) || text.includes(q);
      card.style.display = (matchCat && matchSearch) ? '' : 'none';
    });
  }

  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    current = btn.dataset.filter || 'all';
    apply();
  }))

  search?.addEventListener('input', () => apply());
  apply();
})();
