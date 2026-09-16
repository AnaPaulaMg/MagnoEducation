const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.principles article, .course, .quote-section blockquote').forEach((element, index) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(16px)';
  element.style.animation = `rise .65s ${index * 0.08}s forwards paused`;
  observer.observe(element);
});

const style = document.createElement('style');
style.textContent = '@keyframes rise { to { opacity: 1; transform: translateY(0); } }';
document.head.appendChild(style);