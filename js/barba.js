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
Barba.Prefetch.init()

var wipeColors = JSON.parse(document.getElementById('wipe-colors').textContent);
var hueHistory = [];

function setWipeColor(url) {
  var path = new URL(url, window.location.href).pathname;
  var color = wipeColors[path] || wipeColors[path.replace(/\/$/, '') + '/'] || '#0E0D0B';
  $("#wipe, .loader").css({ background: color });
  hueHistory.push({ url: path, color: color });
  console.log('Wipe colors:', hueHistory.slice());
}

var transitionAnimation = Barba.BaseTransition.extend({
      
 start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    var transitionPromise = new Promise(function(resolve) {
     var outTransition = new TimelineMax();
      
        outTransition
                .set(".color-wipe", {display:"block", y: "100%"})
                
                .to(".color-wipe", 0.7, {y:"-100%", ease: Expo.easeOut}, 0)
        
                .fromTo(".loader", 0.4, { autoAlpha:0}, {delay:0.3, autoAlpha:1, ease: Expo.easeOut, onComplete: function() { resolve(); }}, 0)
        
                .to(".color-wipe", 0.7, {delay:0.2, y: "-200%", ease: Expo.easeIn})
                .set(".color-wipe", {delay:0.2, display:'none'})
    });
    return transitionPromise;
  },

    
 fadeIn: function() {
     $(window).scrollTop(0);
     
      var _this = this;
      var $el = $(this.newContainer);

      TweenMax.set($(this.oldContainer), { display: "none" });
      TweenMax.set($el, { visibility: "visible", opacity: 0 });
     
     
      TweenMax.fromTo(".loader", 0.7, { autoAlpha: 1}, { autoAlpha: 0, ease: Expo.easeIn});

      TweenMax.to($el, 0.1, {
          opacity: 1,
          onComplete: function() {
              _this.done();
              console.log("done");
          }
      }, 0);
  }
});

Barba.Pjax.getTransition = function() {
  return transitionAnimation;
};

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
    BaseJS();
    setOverlayOpen(false, false);
});

Barba.Dispatcher.on('initStateChange', function(currentStatus) {
  setWipeColor(currentStatus.url);
});

document.addEventListener('DOMContentLoaded', function() {
  setWipeColor(window.location.href);
});
