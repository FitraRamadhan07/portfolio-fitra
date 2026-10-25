// main.js
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('nav-pill');
  const glider = document.getElementById('nav-glider');
  const navLinks = navContainer.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const contactForm = document.getElementById('contact-form');

  let isManualScrolling = false;
  let manualScrollTimeout = null;

  // 1. Fungsi menggeser kapsul putih (nav-glider) mengikuti menu aktif
  function moveGlider(targetLink, animate = true) {
    if (!targetLink || !glider) return;

    if (!animate) {
      glider.style.transition = 'none';
    }

    glider.style.width = `${targetLink.offsetWidth}px`;
    glider.style.transform = `translateX(${targetLink.offsetLeft}px)`;

    if (!animate) {
      glider.offsetHeight; // Paksa reflow browser
      glider.style.transition = '';
    }

    // Pastikan menu yang aktif tetap terlihat jika navbar di mobile bisa di-scroll horizontal
    if (navContainer.scrollWidth > navContainer.clientWidth) {
      const scrollLeftTarget = targetLink.offsetLeft - (navContainer.clientWidth / 2) + (targetLink.offsetWidth / 2);
      navContainer.scrollTo({
        left: Math.max(0, scrollLeftTarget),
        behavior: animate ? 'smooth' : 'auto'
      });
    }
  }

  // 2. Fungsi mengaktifkan status visual menu navbar
  function setActiveNavLink(targetId, animateGlider = true) {
    let matchedLink = null;

    navLinks.forEach((link) => {
      const isMatch = link.dataset.target === targetId;
      link.classList.toggle('active', isMatch);
      if (isMatch) {
        link.setAttribute('aria-current', 'page');
        matchedLink = link;
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (matchedLink) {
      moveGlider(matchedLink, animateGlider);
    } else if (glider) {
      // Jika seksi saat ini tidak berada dalam navbar pill (misal: #contact),
      // glider mengecil agar tidak meninggalkan sorotan semu
      glider.style.width = '0px';
    }
  }

  // 3. Smooth Scroll saat tautan anchor (#...) diklik (termasuk menu navbar, logo, panah hero, dan tombol Contact Me)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        isManualScrolling = true;
        clearTimeout(manualScrollTimeout);

        setActiveNavLink(targetId, true);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        manualScrollTimeout = setTimeout(() => {
          isManualScrolling = false;
        }, 850);
      }
    });
  });

  // 4. Scroll-Spy dengan IntersectionObserver
  // Mengamati section mana yang sedang berada di area pandang aktif (viewport)
  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -55% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    if (isManualScrolling) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        setActiveNavLink(activeId, true);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // 5. Penanganan Anti-Bug Reload & Resize Layar
  const initialActive = navContainer.querySelector('.nav-link.active') || navLinks[0];
  if (initialActive) {
    moveGlider(initialActive, false);
  }

  window.addEventListener('load', () => {
    const currentActive = navContainer.querySelector('.nav-link.active') || navLinks[0];
    moveGlider(currentActive, false);
  });

  const resizeObserver = new ResizeObserver(() => {
    const currentActive = navContainer.querySelector('.nav-link.active');
    if (currentActive) {
      moveGlider(currentActive, false);
    }
  });
  resizeObserver.observe(navContainer);

  // 6. Penanganan Formulir Kontak
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('name');
      const senderName = nameInput ? nameInput.value : 'Teman';

      alert(`Terima kasih, ${senderName}! Pesan Anda telah terkirim. Fitra akan segera merespons melalui email.`);
      contactForm.reset();
    });
  }
});
