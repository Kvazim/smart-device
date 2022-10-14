const HEADER = document.querySelector('.header');
const MAIN = document.querySelector('main');
const HeaderHeidht = HEADER.offsetHeight;
const breakpoint = window.matchMedia('(min-width:1024px)');

const onWindowScroll = () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > 1) {
    HEADER.classList.add('header--fixed');
    MAIN.style.marginTop = `${HeaderHeidht}px`;
  } else {
    HEADER.classList.remove('header--fixed');
    MAIN.style.marginTop = null;
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
