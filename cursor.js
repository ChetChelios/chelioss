const trail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
});
