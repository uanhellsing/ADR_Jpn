document.addEventListener('DOMContentLoaded', () => {
  // YouTube requires an HTTP Referer. A page opened directly through file://
  // cannot provide one, so show a useful local-preview fallback instead of Error 153.
  if (window.location.protocol === 'file:') {
    document.querySelectorAll('.live-video-item').forEach(item => {
      const frame = item.querySelector('.archive-video iframe');
      const videoLink = item.querySelector('h3 a');
      if (!frame || !videoLink) return;

      const notice = document.createElement('div');
      notice.className = 'youtube-local-notice';

      const message = document.createElement('p');
      message.textContent = 'YouTube-видео работает через HTTP/HTTPS. Для локальной проверки запустите START_SITE.bat или VS Code Live Server.';

      const link = document.createElement('a');
      link.href = videoLink.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Открыть видео на YouTube ↗';

      notice.append(message, link);
      frame.replaceWith(notice);
    });
  }
  const menuButton = document.querySelector('.hiwy-menu-button');
  const nav = document.querySelector('.hiwy-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }
});
