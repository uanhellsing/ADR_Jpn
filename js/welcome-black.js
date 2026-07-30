const stage = document.querySelector('.welcome-stage');
const art = document.querySelector('.index-art');
const pupil = document.querySelector('.pupil');
const message = document.querySelector('.welcome-message');
const rippleLayer = document.querySelector('.ripple-layer');
let leaving = false;

function getEyeGeometry() {
  const rect = art.getBoundingClientRect();
  return {
    rect,
    centerX: rect.left + rect.width / 2,
    centerY: rect.top + rect.height * 0.492,
    activationRadius: rect.width * 0.2
  };
}

function isInActivationArea(clientX, clientY) {
  const { centerX, centerY, activationRadius } = getEyeGeometry();
  return Math.hypot(clientX - centerX, clientY - centerY) < activationRadius;
}

function movePupil(event) {
  const { rect, centerX, centerY, activationRadius } = getEyeGeometry();
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;
  const angle = Math.atan2(dy, dx);
  const maxX = rect.width * 0.020;
  const maxY = rect.height * 0.018;
  const distance = Math.min(1, Math.hypot(dx, dy) / (rect.width * 0.48));
  const x = Math.cos(angle) * maxX * distance;
  const y = Math.sin(angle) * maxY * distance;

  pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

  const inCenter = Math.hypot(dx, dy) < activationRadius;
  message.classList.toggle('show', inCenter);
  stage.classList.toggle('center-active', inCenter);
}

function createRipple(x, y, delay = 0) {
  setTimeout(() => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    rippleLayer.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }, delay);
}

function enterSite(event) {
  if (leaving || !isInActivationArea(event.clientX, event.clientY)) return;
  leaving = true;
  document.body.classList.add('leaving');
  const x = event.clientX;
  const y = event.clientY;
  [0, 130, 270, 430].forEach(delay => createRipple(x, y, delay));
  setTimeout(() => location.href = 'home.html', 1450);
}

document.addEventListener('mousemove', movePupil, { passive: true });
stage.addEventListener('click', enterSite);
