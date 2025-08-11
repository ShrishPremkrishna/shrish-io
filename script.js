document.getElementById('year')?.textContent = new Date().getFullYear();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Active nav highlight
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  let currentId = sections[0]?.id || '';
  for (const section of sections) {
    if (section.offsetTop <= scrollY) currentId = section.id;
  }
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', href === `#${currentId}`);
  });
}

setActiveNav();
window.addEventListener('scroll', setActiveNav);


