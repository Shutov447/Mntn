'use strict';

const indicatorLine = document.getElementById('indicator-line');

window.addEventListener('scroll', () => {
  progressAnumation();
});

function progressAnumation() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const siteHeight = document.documentElement.scrollHeight;

  const percentageProgress = Math.round(
    (scrollTop / (siteHeight - windowHeight)) * 100
  );

  indicatorLine.style.height = `${percentageProgress}%`;
}
