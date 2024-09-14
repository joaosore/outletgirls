//Cursor glow effect
const cursorOffSet = function (e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  this.style.setProperty('--cursor-x', x + 'px');
  this.style.setProperty('--cursor-y', y + 'px');
};
document
  .querySelector('.home-hero')
  .addEventListener('mousemove', cursorOffSet);
document
  .querySelector('.home-hero-img-wrap')
  .addEventListener('mousemove', cursorOffSet);
document.querySelectorAll('.use-cases-grid, .features-grid').forEach((grid) => {
  grid.addEventListener('mousemove', function (e) {
    this.querySelectorAll('.use-case-card, .feature-card').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--cursor-x', x + 'px');
      card.style.setProperty('--cursor-y', y + 'px');
    });
  });
});

// Laser shooting
if (window.innerWidth > 767) {
  const floatIcons = document.querySelectorAll('.float-item-wrap');
  const hero = document.querySelector('.home-hero');
  let hasPlayed = false;
  floatIcons.forEach((icon) => {
    let timeout = Math.round(Math.random() * (6000 - 3000)) + 3000;
    let initialTimeout = Math.round(Math.random() * (2000 - 500)) + 500;
    setTimeout(() => {
      icon.classList.add('animate');
    }, initialTimeout);
    setTimeout(() => {
      icon.classList.remove('animate');
    }, 4000);
    let laserInterval = setInterval(function () {
      icon.classList.add('animate');
      timeout = Math.round(Math.random() * (6000 - 3000)) + 3000;
      setTimeout(() => {
        icon.classList.remove('animate');
      }, 2999);
      hasPlayed = true;
    }, timeout);

    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            icon.style.animationPlayState = 'running';
            icon.querySelectorAll('.float-item-line').forEach((trigger) => {
              trigger.style.animationPlayState = 'running';
            });
          } else {
            icon.style.animationPlayState = 'paused';
            icon.querySelectorAll('.float-item-line').forEach((trigger) => {
              trigger.style.animationPlayState = 'paused';
            });
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(hero);
  });
}

//Spline init
/*
const initSpline = function () {
const splineEl = document.getElementById("spline");
if (window.innerWidth > 991 && !splineEl.hasAttribute("src")) {
splineEl.setAttribute(
  "src",
  "https://my.spline.design/websitefundstackliveversioncopy-3f3ef7fcac10d711f84b24d5c0a470e8/"
);
} else if (window.innerWidth <= 991) {
splineEl.removeAttribute("src");
}
};
setTimeout(() => {
initSpline();
}, 1000);
window.addEventListener("resize", initSpline);
*/
//FAQ auto collapse
document.querySelectorAll('.faq-header').forEach((faq) => {
  faq.addEventListener('click', function () {
    if (!faq.classList.contains('open')) {
      document.querySelectorAll('.faq-header.open').forEach((openFaq) => {
        openFaq.click();
      });
      faq.classList.add('open');
    } else {
      faq.classList.remove('open');
    }
  });
});
