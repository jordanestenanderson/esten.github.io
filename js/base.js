const menuButton = document.getElementById('burgerWrap');
const pageContent = document.getElementById('content-container');
const menuIcon = document.getElementById('togglemenu');
let toolPointerType;
function closeTooltips() {
  document.querySelectorAll('#overlayTrigger .tool-button').forEach(button => {
    button.setAttribute('aria-pressed', 'false');
    button.style.removeProperty('--tooltip-offset');
  });
}

document.addEventListener('click', event => {
  const button = event.target.closest('.tool-button');
  if (!button) return;
  if (toolPointerType === 'mouse' && event.detail > 0) {
    closeTooltips();
    return;
  }
  const shouldOpen = button.getAttribute('aria-pressed') !== 'true';
  closeTooltips();
  button.setAttribute('aria-pressed', String(shouldOpen));
  if (shouldOpen) {
    const tooltipBounds = button.querySelector('.tool-tooltip').getBoundingClientRect();
    const startingOffset = parseFloat(getComputedStyle(button).getPropertyValue('--tooltip-offset')) || 0;
    const edgePadding = 8;
    const offset = tooltipBounds.left < edgePadding
      ? edgePadding - tooltipBounds.left
      : Math.min(0, window.innerWidth - edgePadding - tooltipBounds.right);
    button.style.setProperty('--tooltip-offset', `${startingOffset + offset}px`);
  }
});

document.addEventListener('pointerdown', event => {
  if (event.target.closest('.tool-button')) {
    toolPointerType = event.pointerType;
  } else {
    toolPointerType = undefined;
    closeTooltips();
  }
});

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

  if (!isOpen) closeTooltips();

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

  const vancouverTime = document.getElementById('vancouver-time');
  const vancouverWeather = document.getElementById('vancouver-weather');

  if (vancouverTime && vancouverWeather) {
    const temperatureText = document.getElementById('vancouver-temperature');
    const weatherIcon = vancouverWeather.querySelector('use');
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      // B.C. uses year-round Pacific Time (UTC−7), abbreviated PCT.
      timeZone: 'Etc/GMT+7',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    function updateVancouverTime() {
      const now = new Date();
      vancouverTime.textContent = `${timeFormatter.format(now)} PCT`;
      vancouverTime.dateTime = now.toISOString();
    }

    function weatherIconFor(condition) {
      if (/thunder|storm/i.test(condition)) return 'storm';
      if (/snow|flurr|ice|sleet/i.test(condition)) return 'snow';
      if (/rain|shower|drizzle/i.test(condition)) return 'rain';
      if (/sunny|clear/i.test(condition) && !/cloud/i.test(condition)) return 'sun';
      return 'cloud';
    }

    async function updateVancouverWeather() {
      try {
        const response = await fetch('https://api.weather.gc.ca/collections/citypageweather-realtime/items/bc-74?f=json', { signal });
        if (!response.ok) throw new Error('Weather data unavailable');
        const data = await response.json();
        const conditions = data.properties && data.properties.currentConditions;
        const temperatureValue = conditions && conditions.temperature && conditions.temperature.value && conditions.temperature.value.en;
        const temperature = Number(temperatureValue);
        if (temperatureValue == null || !Number.isFinite(temperature)) throw new Error('Temperature unavailable');
        if (signal.aborted) return;

        const condition = conditions.condition && conditions.condition.en || 'Current conditions';
        const roundedTemperature = Math.round(temperature);
        temperatureText.textContent = `${roundedTemperature}°C`;
        weatherIcon.setAttribute('href', `#hero-weather-${weatherIconFor(condition)}`);
        vancouverWeather.setAttribute('aria-label', `${condition}, ${roundedTemperature} degrees Celsius in Vancouver`);
        vancouverWeather.title = condition;
      } catch (error) {
        // Keep the placeholder (or last reading) if the service is temporarily unavailable.
      }
    }

    updateVancouverTime();
    updateVancouverWeather();
    const timeInterval = window.setInterval(updateVancouverTime, 15000);
    const weatherInterval = window.setInterval(updateVancouverWeather, 30 * 60 * 1000);
    signal.addEventListener('abort', () => {
      window.clearInterval(timeInterval);
      window.clearInterval(weatherInterval);
    }, { once: true });
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
