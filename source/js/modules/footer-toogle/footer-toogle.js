import {titleWrapper} from '../nojs/nojs';

const onOpenAccardion = (element) => {
  element.classList.add('is-active');
};

const onCloseAccardion = (element) => {
  element.classList.remove('is-active');
};

const onButtonClick = (e) => {
  const element = e.target;

  if (element.classList.contains('is-active')) {
    onCloseAccardion(element);
  } else {
    onOpenAccardion(element);
  }
};

titleWrapper.forEach((toogle) => {
  toogle.addEventListener('click', onButtonClick);
});
