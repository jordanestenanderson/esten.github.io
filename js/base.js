const menuButton = document.getElementById('burgerWrap');
const pageContent = document.getElementById('content-container');
const menuIcon = document.getElementById('togglemenu');

function setOverlayOpen(isOpen, restoreFocus) {
  const overlay = document.getElementById('overlayTrigger');
  const returnToMenu = !isOpen && (restoreFocus || overlay.contains(document.activeElement));
  if (returnToMenu) menuButton.focus({ preventScroll: true });

  document.documentElement.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
  menuIcon.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close about menu' : 'Open about menu');
  overlay.setAttribute('aria-hidden', String(!isOpen));
  overlay.toggleAttribute('inert', !isOpen);
  pageContent.toggleAttribute('inert', isOpen);

  if (isOpen) {
    overlay.scrollTop = 0;
    overlay.querySelector('.overlay-title').focus({ preventScroll: true });
  }
}

menuButton.addEventListener('click', function() {
  setOverlayOpen(menuButton.getAttribute('aria-expanded') !== 'true', true);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    setOverlayOpen(false, true);
  }
});

let pageBindings;
let scrollSpyObserver;
let aosInitialized = false;

function BaseJS() {
  if (pageBindings) pageBindings.abort();
  if (scrollSpyObserver) scrollSpyObserver.disconnect();
  pageBindings = new AbortController();
  const signal = pageBindings.signal;

  if (!aosInitialized) {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quad',
      once: true,
    });
    aosInitialized = true;
  } else {
    AOS.refreshHard();
  }

  const year = document.getElementById("year");

  if (year) {
    year.innerHTML = new Date().getFullYear();
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll("#project-content .active-section");
    const navLinks = document.querySelectorAll(".project-navigation-link");

    if (!sections.length || !navLinks.length) return;

    scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(
            `.project-navigation-link[href="#${id}"]`
          );

          if (entry.isIntersecting && link) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    sections.forEach((section) => scrollSpyObserver.observe(section));
  }

  initScrollSpy();

  document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // Ignore external links or empty anchors
      if (!targetId || !targetId.startsWith('#')) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });
    }, { signal });
  });

  const relatedProjects = document.querySelector('.related-projects-grid');

  if (relatedProjects) {
    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let scrollLeft = 0;

    relatedProjects.addEventListener('mousedown', (e) => {
      isDragging = true;
      hasDragged = false;
      startX = e.pageX;
      scrollLeft = relatedProjects.scrollLeft;
    }, { signal });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const distance = e.pageX - startX;

      if (Math.abs(distance) > 5) {
        hasDragged = true;
        relatedProjects.classList.add('is-dragging');
      }

      if (hasDragged) {
        e.preventDefault();
        relatedProjects.scrollLeft = scrollLeft - (distance * 1.5);
      }
    }, { signal });

    document.addEventListener('mouseup', () => {
      if (!isDragging) return;

      isDragging = false;
      relatedProjects.classList.remove('is-dragging');
    }, { signal });

    relatedProjects.addEventListener('click', (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        hasDragged = false;
      }
    }, { capture: true, signal });

    relatedProjects.addEventListener('dragstart', (e) => {
      e.preventDefault();
    }, { signal });
  }
}

BaseJS();
