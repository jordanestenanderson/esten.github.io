var hueHistory = ['#0E0D0B'];

$(".burger-wrap").click(function(){
  $("html, .overlay, .burger").toggleClass("open");
});

function BaseJS() {
	$(document).on("click",".loader-link",function() {
        var hex = $(this).data('hue');
        hueHistory.push(hex);
		console.log(hueHistory);
        $("#wipe, .loader").css({background:hex});
	});

	AOS.init({
	  	duration: 1000,
	    easing: 'ease-out-quad',
	    once: true,
	})

	document.getElementById("year").innerHTML = new Date().getFullYear();

  function initScrollSpy() {
    const sections = document.querySelectorAll("#project-content .active-section");
    const navLinks = document.querySelectorAll(".project-navigation-link");

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
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

    sections.forEach((section) => observer.observe(section));
  }
  initScrollSpy();

  document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // ignore external links or empty anchors
      if (!targetId || !targetId.startsWith('#')) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  const relatedProjects = document.querySelector('.related-projects-grid');

  let isDragging = false;
  let hasDragged = false;
  let startX = 0;
  let scrollLeft = 0;

  relatedProjects.addEventListener('mousedown', (e) => {
    isDragging = true;
    hasDragged = false;
    startX = e.pageX;
    scrollLeft = relatedProjects.scrollLeft;
  });

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
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    isDragging = false;
    relatedProjects.classList.remove('is-dragging');
  });

  relatedProjects.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);

  relatedProjects.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

}
BaseJS();