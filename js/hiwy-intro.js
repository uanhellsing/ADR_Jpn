const durationMs = 5500;
const counter = document.querySelector('.intro-counter');
const skip = document.querySelector('.skip-link');
const started = performance.now();
let leaving = false;

const goToSite = () => {
  if (leaving) return;
  leaving = true;
  document.body.classList.add('leaving');
  window.setTimeout(() => { window.location.href = 'home.html'; }, 220);
};

const updateCounter = (now) => {
  const remainingMs = Math.max(0, durationMs - (now - started));
  const seconds = (remainingMs / 1000).toFixed(1).padStart(4, '0');
  if (counter) counter.textContent = `ВХОД ЧЕРЕЗ 00:${seconds}`;
  if (remainingMs <= 0) {
    goToSite();
    return;
  }
  window.requestAnimationFrame(updateCounter);
};

window.requestAnimationFrame(updateCounter);

if (skip) {
  skip.addEventListener('click', event => {
    event.preventDefault();
    goToSite();
  });
}
