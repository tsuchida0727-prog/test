(function () {
  const root = document.documentElement;

  // Apply saved theme immediately to prevent flash
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync() {
      const isLight = root.getAttribute('data-theme') === 'light';
      btn.textContent = isLight ? '☾ Dark' : '☀ Light';
    }

    btn.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      sync();
    });

    sync();
  });
})();
