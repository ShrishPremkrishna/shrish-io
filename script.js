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

// Blog loader (from posts.json)
async function loadBlog() {
  try {
    const res = await fetch('./posts.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load posts');
    const posts = await res.json();
    const grid = document.getElementById('blog-grid');
    const empty = document.getElementById('blog-empty');
    if (!Array.isArray(posts) || posts.length === 0) {
      if (empty) empty.style.display = 'block';
      return;
    }
    if (empty) empty.style.display = 'none';
    posts.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'project reveal';
      const title = document.createElement('h3');
      title.textContent = p.title || 'Untitled';
      const meta = document.createElement('p');
      meta.className = 'muted';
      meta.textContent = p.date ? new Date(p.date).toLocaleDateString() : '';
      const desc = document.createElement('p');
      desc.textContent = p.summary || '';
      const links = document.createElement('div');
      links.className = 'project-links';
      if (p.url) {
        const a = document.createElement('a');
        a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = 'Read';
        links.appendChild(a);
      }
      card.append(title, meta, desc, links);
      grid?.appendChild(card);
      observer.observe(card);
    });
  } catch (_) {
    const empty = document.getElementById('blog-empty');
    if (empty) empty.style.display = 'block';
  }
}

loadBlog();


