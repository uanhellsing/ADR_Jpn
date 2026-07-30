document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => observer.observe(item));

  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-category]');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      filterItems.forEach(item => {
        item.style.display = filter === 'all' || item.dataset.category === filter ? '' : 'none';
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const footerEyes = document.querySelectorAll('.footer-eye');
  if (!footerEyes.length) return;

  const moveFooterEyes = event => {
    footerEyes.forEach(eye => {
      const pupil = eye.querySelector('.footer-pupil');
      if (!pupil) return;

      const rect = eye.getBoundingClientRect();
      const originX = rect.left + rect.width * 0.49;
      const originY = rect.top + rect.height * 0.72;
      const dx = event.clientX - originX;
      const dy = event.clientY - originY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(1, Math.hypot(dx, dy) / 300);

      const directionX = Math.cos(angle);
      const directionY = Math.sin(angle);
      // The supplied eye artwork has more free space on the right and above.
      // Use asymmetric limits so the red pupil reaches both visible edges naturally.
      const maxX = rect.width * (directionX >= 0 ? 0.155 : 0.105);
      const maxY = rect.height * (directionY < 0 ? 0.098 : 0.072);
      const x = directionX * maxX * distance;
      const y = directionY * maxY * distance;

      pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  };

  document.addEventListener('mousemove', moveFooterEyes, { passive: true });
});

// V10: show a different mix of vinyl and equipment on each visit to Home.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('random-staff-grid');
  if (!grid) return;

  const items = [
    {
      href: 'equipment/wharfedale-diamond-10-1.html',
      image: 'images/equipment/wharfedale-diamond-10-1-1.jpg',
      kicker: 'Equipment · Speakers',
      title: 'Wharfedale Diamond 10.1',
      text: 'Полочная акустика с мягкой и цельной подачей.'
    },
    {
      href: 'equipment/teac-a-h01.html',
      image: 'images/equipment/teac-a-h01-1.jpg',
      kicker: 'Equipment · Amplifier',
      title: 'TEAC A-H01',
      text: 'Компактный усилитель с USB-ЦАП и цифровыми входами.'
    },
    {
      href: 'equipment/akg-q701.html',
      image: 'images/equipment/akg-q701-1.jpg',
      kicker: 'Equipment · Headphones',
      title: 'AKG Q701',
      text: 'Открытые наушники с широкой сценой и ясной серединой.'
    },
    {
      href: 'equipment/moondrop-kato.html',
      image: 'images/equipment/moondrop-kato-1.webp',
      kicker: 'Equipment · IEM',
      title: 'Moondrop Kato',
      text: 'Динамические внутриканальные наушники в стальном корпусе.'
    },
    {
      href: 'equipment/moondrop-variations.html',
      image: 'images/equipment/moondrop-variations-1.jpg',
      kicker: 'Equipment · IEM',
      title: 'Moondrop Variations',
      text: 'Гибридная модель с выразительным саб-басом и детальностью.'
    },
    {
      href: 'equipment/smsl-ph1.html',
      image: 'images/equipment/smsl-ph1-1.webp',
      kicker: 'Equipment · Phono',
      title: 'SMSL PH-1',
      text: 'Компактный фонокорректор для домашней виниловой системы.'
    },
    {
      href: 'equipment/lo-d-ps38-black.html',
      image: 'images/equipment/lo-d-ps38-black-1.jpg',
      kicker: 'Equipment · Turntable',
      title: 'Lo-D PS-38 · Black',
      text: 'Японский проигрыватель в строгом чёрном исполнении.'
    },
    {
      href: 'equipment/lo-d-ps38-wood.html',
      image: 'images/equipment/lo-d-ps38-wood-1.jpg',
      kicker: 'Equipment · Turntable',
      title: 'Lo-D PS-38 · Wood',
      text: 'Версия проигрывателя с отделкой под дерево.'
    },
    {
      href: 'equipment/ortofon-2m-red.html',
      image: 'images/equipment/ortofon-2m-red-1.png',
      kicker: 'Equipment · Cartridge',
      title: 'Ortofon 2M Red',
      text: 'Популярный MM-картридж для первого серьёзного апгрейда.'
    },
    {
      href: 'equipment/audio-technica-at-vm95e.html',
      image: 'images/equipment/audio-technica-at-vm95e-1.webp',
      kicker: 'Equipment · Cartridge',
      title: 'Audio-Technica AT-VM95E',
      text: 'Универсальный MM-картридж с эллиптической заточкой.'
    },
    {
      href: 'equipment/sumiko-pearl.html',
      image: 'images/equipment/sumiko-pearl-1.jpg',
      kicker: 'Equipment · Cartridge',
      title: 'Sumiko Pearl',
      text: 'Музыкальный MM-картридж с насыщенной серединой.'
    },
    {
      href: 'equipment/gigabyte-aorus-fo48u.html',
      image: 'images/equipment/gigabyte-aorus-fo48u-1.png',
      kicker: 'Equipment · Display',
      title: 'Gigabyte AORUS FO48U',
      text: 'Крупный 4K OLED-дисплей для игр и мультимедиа.'
    },
    {
      href: 'collection.html#for-you',
      image: 'images/collection/tatsuro-yamashita-for-you-vinyl.jpg',
      kicker: 'Vinyl · 1982',
      title: 'Tatsuro Yamashita — For You',
      text: 'Японское виниловое издание из коллекции.'
    },
    {
      href: 'collection.html#ride-on-time',
      image: 'images/collection/tatsuro-yamashita-ride-on-time-vinyl.jpg',
      kicker: 'Vinyl · 1980',
      title: 'Tatsuro Yamashita — Ride on Time',
      text: 'Классический японский альбом на виниле.'
    },
    {
      href: 'collection.html#starboy',
      image: 'images/collection/the-weeknd-starboy-vinyl.jpg',
      kicker: 'Vinyl · 2016',
      title: 'The Weeknd — Starboy',
      text: 'Цветное виниловое издание альбома.'
    },
    {
      href: 'collection.html#shotaijo-no-nai-show',
      image: 'images/collection/yosui-inoue-shotaijo-no-nai-show-vinyl.jpg',
      kicker: 'Vinyl · 1976',
      title: 'Yosui Inoue — 招待状のないショー',
      text: 'Японская пластинка из личной коллекции.'
    },
    {
      href: 'collection.html#elmo-hope-final-sessions-vol-1',
      image: 'images/collection/elmo-hope-final-sessions-vol-1.webp',
      kicker: 'Vinyl · 1991',
      title: 'Elmo Hope Trio — The Final Sessions Vol. 1',
      text: 'Японское виниловое издание джазовых сессий.'
    },
    {
      href: 'collection.html#william-ackerman-passage',
      image: 'images/collection/william-ackerman-passage.webp',
      kicker: 'Vinyl · 1981',
      title: 'William Ackerman — Passage',
      text: 'Акустический альбом из виниловой коллекции.'
    },
    {
      href: 'collection.html#nsp-seishun-no-kakeratachi',
      image: 'images/collection/nsp-seishun-no-kakeratachi.webp',
      kicker: '2LP · 1978',
      title: 'N.S.P — 青春のかけら達',
      text: 'Двойной японский сборник на виниле.'
    },
    {
      href: 'collection.html#takao-horiuchi-konnichiwa',
      image: 'images/collection/takao-horiuchi-konnichiwa.webp',
      kicker: 'Vinyl · 1978',
      title: 'Takao Horiuchi — こんにちは',
      text: 'Японская пластинка Takao Horiuchi из личной коллекции.'
    },
    {
      href: 'collection.html#shigeru-suzuki-serenade',
      image: 'images/collection/shigeru-suzuki-serenade.webp',
      kicker: 'Vinyl · 1983',
      title: 'Shigeru Suzuki — Serenade',
      text: 'Виниловое издание альбома Serenade из личной коллекции.'
    },
    {
      href: 'collection.html#chanels-live-whisky-a-go-go',
      image: 'images/collection/chanels-live-whisky-a-go-go.webp',
      kicker: 'Vinyl · 1981',
      title: 'The Chanels — Live at Whisky A Go Go',
      text: 'Концертное виниловое издание.'
    },
    {
      href: 'collection.html#chanels-mr-black',
      image: 'images/collection/chanels-mr-black.webp',
      kicker: 'Vinyl · 1980',
      title: 'The Chanels — Mr. Black',
      text: 'Японский альбом на виниле.'
    },
    {
      href: 'collection.html#kazumi-band-talk-you-all-tight',
      image: 'images/collection/kazumi-band-talk-you-all-tight.webp',
      kicker: 'Vinyl · 1981',
      title: 'Kazumi Band — Talk You All Tight',
      text: 'Японская фьюжн-пластинка из коллекции.'
    },
    {
      href: 'collection.html#adhd-4',
      image: 'images/collection/adhd-4.webp',
      kicker: 'Digital · 2013',
      title: 'ADHD — ADHD 4',
      text: 'Четвёртый альбом исландского джазового коллектива.'
    },
    {
      href: 'collection.html#adhd-7',
      image: 'images/collection/adhd-7.webp',
      kicker: 'Digital · 2019',
      title: 'ADHD — ADHD 7',
      text: 'Седьмая студийная работа группы ADHD.'
    },
    {
      href: 'collection.html#aurora-a-different-kind-of-human-step-2',
      image: 'images/collection/aurora-a-different-kind-of-human-step-2.webp',
      kicker: 'Digital · 2019',
      title: 'AURORA — A Different Kind of Human (Step 2)',
      text: 'Цифровое издание альбома AURORA.'
    },
    {
      href: 'collection.html#aurora-all-my-demons-greeting-me-as-a-friend',
      image: 'images/collection/aurora-all-my-demons-greeting-me-as-a-friend.webp',
      kicker: 'Digital · 2016',
      title: 'AURORA — All My Demons Greeting Me as a Friend',
      text: 'Дебютный студийный альбом AURORA в цифровой коллекции.'
    },
    {
      href: 'collection.html#aurora-the-gods-we-can-touch',
      image: 'images/collection/aurora-the-gods-we-can-touch.webp',
      kicker: 'Vinyl · 2022',
      title: 'AURORA — The Gods We Can Touch',
      text: 'Виниловое издание альбома AURORA.'
    }

  ];

  const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 4);
  grid.innerHTML = shuffled.map(item => `
    <a class="card equipment-card visible" href="${item.href}">
      <img src="${item.image}" alt="${item.title}">
      <div class="card-body">
        <div class="card-kicker">${item.kicker}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </a>
  `).join('');
});
