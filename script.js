const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-in'));
}

// Desktop mouse drag for the horizontal game list. Touch devices use native swipe.
const track = document.querySelector('.games-track');
if (track) {
  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  track.addEventListener('mousedown', (event) => {
    dragging = true;
    startX = event.pageX;
    startScroll = track.scrollLeft;
  });

  window.addEventListener('mouseup', () => { dragging = false; });
  track.addEventListener('mouseleave', () => { dragging = false; });
  track.addEventListener('mousemove', (event) => {
    if (!dragging) return;
    event.preventDefault();
    const delta = event.pageX - startX;
    track.scrollLeft = startScroll - delta;
  });
}
