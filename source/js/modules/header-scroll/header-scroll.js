const header = document.querySelector('.header');
const main = document.querySelector('main');
const headerHeidht = header.offsetHeight;
const breakpoint = window.matchMedia('(min-width:1024px)');

const onWindowScroll = () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > 1) {
    header.classList.add('header--fixed');
    main.style.marginTop = `${headerHeidht}px`;
  } else {
    header.classList.remove('header--fixed');
    main.style.marginTop = null;
  }
};

const enableScroll = () => {
  window.addEventListener('scroll', onWindowScroll);
};

const removeScroll = () => {
  window.removeEventListener('scroll', onWindowScroll);
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    enableScroll();
  } else {
    removeScroll();
  }
};
breakpoint.addListener(breakpointChecker);

export {breakpointChecker};
