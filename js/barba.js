function disableScrollRestoration() {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

// Each history entry has its own mode, including entries created before this fix.
// Run before Barba's popstate handler; fadeIn scrolls only after the wipe covers.
disableScrollRestoration();
window.addEventListener('popstate', disableScrollRestoration);

Barba.Pjax.start();
Barba.Prefetch.init();

const wipeColors = JSON.parse(document.getElementById('wipe-colors').textContent);
const hueHistory = [];

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setWipeColor(url) {
  const path = new URL(url, window.location.href).pathname;
  const color = wipeColors[path] || wipeColors[path.replace(/\/$/, '') + '/'] || '#0E0D0B';

  document.querySelectorAll('#wipe, .loader').forEach(function(element) {
    element.style.background = color;
  });

  hueHistory.push({ url: path, color: color });
  console.log('Wipe colors:', hueHistory.slice());
}

const transitionAnimation = Barba.BaseTransition.extend({
  start: function() {
    if (prefersReducedMotion()) {
      this.newContainerLoading.then(this.showWithoutAnimation.bind(this));
      return;
    }

    Promise.all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  showWithoutAnimation: function() {
    gsap.killTweensOf('.color-wipe, .loader');
    gsap.set('.color-wipe', { display: 'none' });
    gsap.set('.loader', { autoAlpha: 0 });
    window.scrollTo(0, 0);
    gsap.set(this.oldContainer, { display: 'none' });
    gsap.set(this.newContainer, { visibility: 'visible', opacity: 1 });
    this.done();
  },

  startTransition: function() {
    return new Promise(function(resolve) {
      gsap.timeline()
        .set('.color-wipe', { display: 'block', y: '100%' }, 0)
        .to('.color-wipe', { duration: 0.7, y: '-100%', ease: 'expo.out' }, 0)
        .fromTo('.loader', { autoAlpha: 0 }, {
          duration: 0.4,
          autoAlpha: 1,
          ease: 'expo.out',
          onComplete: resolve
        }, 0.3)
        .to('.color-wipe', { duration: 0.7, y: '-200%', ease: 'expo.in' }, 0.9)
        .set('.color-wipe', { display: 'none' }, 1.8);
    });
  },

  fadeIn: function() {
    window.scrollTo(0, 0);

    const transition = this;
    const newContainer = this.newContainer;

    gsap.set(this.oldContainer, { display: 'none' });
    gsap.set(newContainer, { visibility: 'visible', opacity: 0 });
    gsap.fromTo('.loader', { autoAlpha: 1 }, {
      duration: 0.7,
      autoAlpha: 0,
      ease: 'expo.in'
    });
    gsap.to(newContainer, {
      duration: 0.1,
      opacity: 1,
      onComplete: function() {
        transition.done();
      }
    });
  }
});

Barba.Pjax.getTransition = function() {
  return transitionAnimation;
};

Barba.Dispatcher.on('transitionCompleted', function() {
  BaseJS();
  setOverlayOpen(false, false);
});

Barba.Dispatcher.on('initStateChange', function(currentStatus) {
  setWipeColor(currentStatus.url);
});

document.addEventListener('DOMContentLoaded', function() {
  setWipeColor(window.location.href);
});
