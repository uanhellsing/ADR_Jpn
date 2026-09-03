document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.08 });
    revealItems.forEach(item => observer.observe(item));
  } else { revealItems.forEach(item => item.classList.add('visible')); }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const groups = document.querySelectorAll('[data-collection-group]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active')); button.classList.add('active');
    const filter = button.dataset.filter;
    groups.forEach(group => { group.hidden = !(filter === 'all' || group.dataset.collectionGroup === filter); });
  }));
});

document.addEventListener('DOMContentLoaded', () => {
  const footerEyes = document.querySelectorAll('.footer-eye'); if (!footerEyes.length) return;
  document.addEventListener('mousemove', event => footerEyes.forEach(eye => {
    const pupil = eye.querySelector('.footer-pupil'); if (!pupil) return;
    const rect = eye.getBoundingClientRect(); const originX = rect.left + rect.width * 0.49; const originY = rect.top + rect.height * 0.72;
    const dx = event.clientX - originX, dy = event.clientY - originY, angle = Math.atan2(dy, dx), distance = Math.min(1, Math.hypot(dx, dy) / 300);
    const directionX = Math.cos(angle), directionY = Math.sin(angle);
    const maxX = rect.width * (directionX >= 0 ? 0.155 : 0.105), maxY = rect.height * (directionY < 0 ? 0.098 : 0.072);
    pupil.style.transform = `translate(calc(-50% + ${directionX * maxX * distance}px), calc(-50% + ${directionY * maxY * distance}px))`;
  }), { passive: true });
});

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('random-staff-grid'); if (!grid) return;
  const lang = document.documentElement.lang === 'ja' ? 'ja' : document.documentElement.lang === 'en' ? 'en' : 'ru';
  const suffix = lang === 'ja' ? '-ja' : lang === 'en' ? '-en' : '';
  const L = {
    speakers:{ru:'Акустика',ja:'スピーカー',en:'Speakers'}, amplifier:{ru:'Усилитель',ja:'アンプ',en:'Amplifier'}, headphones:{ru:'Наушники',ja:'ヘッドホン',en:'Headphones'},
    iem:{ru:'IEM',ja:'IEM',en:'IEM'}, phono:{ru:'Фонокорректор',ja:'フォノ',en:'Phono'}, turntable:{ru:'Проигрыватель',ja:'ターンテーブル',en:'Turntable'},
    cartridge:{ru:'Картридж',ja:'カートリッジ',en:'Cartridge'}, display:{ru:'Монитор',ja:'モニター',en:'Display'}, vinyl:{ru:'Винил',ja:'レコード',en:'Vinyl'}, digital:{ru:'Digital',ja:'デジタル',en:'Digital'}
  };
  const tx = (ru,ja,en) => ({ru,ja,en}[lang]);
  const items = [
    ['equipment/wharfedale-diamond-10-1','images/equipment/wharfedale-diamond-10-1-1.jpg','speakers','Wharfedale Diamond 10.1',tx('Мягкая полочная акустика.','柔らかな音のブックシェルフスピーカー。','Smooth bookshelf speakers.')],
    ['equipment/teac-a-h01','images/equipment/teac-a-h01-1.jpg','amplifier','TEAC A-H01',tx('Компактный усилитель с USB-ЦАП.','USB DAC内蔵のコンパクトアンプ。','Compact amplifier with USB DAC.')],
    ['equipment/akg-q701','images/equipment/akg-q701-1.jpg','headphones','AKG Q701',tx('Открытые наушники с широкой сценой.','広い音場のオープン型ヘッドホン。','Open headphones with a wide stage.')],
    ['equipment/moondrop-kato','images/equipment/moondrop-kato-1.webp','iem','Moondrop Kato',tx('Однодрайверные IEM в металлическом корпусе.','金属筐体のシングルダイナミックIEM。','Single-dynamic IEMs in metal shells.')],
    ['equipment/moondrop-variations','images/equipment/moondrop-variations-1.jpg','iem','Moondrop Variations',tx('Трибридные IEM с глубоким саббасом.','深いサブベースを持つトライブリッドIEM。','Tribrid IEMs with deep sub-bass.')],
    ['equipment/smsl-ph1','images/equipment/smsl-ph1-1.webp','phono','SMSL PH-1',tx('Компактный фонокорректор.','コンパクトなフォノイコライザー。','Compact phono preamp.')],
    ['equipment/lo-d-ps38-black','images/equipment/lo-d-ps38-black-1.jpg','turntable','Lo-D PS-38 · Black',tx('Японский проигрыватель с прямым приводом.','日本製ダイレクトドライブ。','Japanese direct-drive turntable.')],
    ['equipment/ortofon-2m-red','images/equipment/ortofon-2m-red-1.png','cartridge','Ortofon 2M Red',tx('MM-картридж со сменной иглой.','交換針対応のMMカートリッジ。','MM cartridge with replaceable stylus.')],
    ['equipment/gigabyte-aorus-fo48u','images/equipment/gigabyte-aorus-fo48u-1.png','display','Gigabyte AORUS FO48U',tx('48-дюймовый 4K OLED.','48インチ4K OLED。','48-inch 4K OLED.')],
    ['collection#tatsuro-yamashita-pocket-music','images/collection/tatsuro-yamashita-pocket-music.webp','vinyl','Tatsuro Yamashita — POCKET MUSIC',tx('Японский винил 1986 года.','1986年の日本盤。','Japanese vinyl from 1986.')],
    ['collection#for-you','images/collection/tatsuro-yamashita-for-you-vinyl.jpg','vinyl','Tatsuro Yamashita — FOR YOU',tx('Классический японский винил.','日本の定番レコード。','Classic Japanese vinyl.')],
    ['collection#starboy','images/collection/the-weeknd-starboy-vinyl.jpg','vinyl','The Weeknd — Starboy',tx('Виниловое издание альбома.','アルバムのレコード盤。','Vinyl edition of the album.')],
    ['collection#aurora-the-gods-we-can-touch','images/collection/aurora-the-gods-we-can-touch.webp','vinyl','AURORA — The Gods We Can Touch',tx('Виниловое издание AURORA.','AURORAのレコード盤。','AURORA on vinyl.')],
    ['collection#adhd-7','images/collection/adhd-7.webp','digital','ADHD — ADHD 7',tx('Цифровое издание.','デジタル版。','Digital release.')]
  ];
  const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0,4);
  grid.innerHTML = shuffled.map(([href,image,kicker,title,text]) => {
    let finalHref;
    if (href.startsWith('equipment/')) finalHref = href + suffix + '.html';
    else if (href.startsWith('collection#')) finalHref = 'collection' + suffix + '.html' + href.slice('collection'.length);
    else finalHref = href;
    return `<a class="card equipment-card visible" href="${finalHref}"><img src="${image}" alt="${title}"><div class="card-body"><div class="card-kicker">${L[kicker][lang]}</div><h3>${title}</h3><p>${text}</p></div></a>`;
  }).join('');
});
