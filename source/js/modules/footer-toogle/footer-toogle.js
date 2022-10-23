import {titleWrapper} from '../nojs/nojs';

const onOpenAccardion = (element) => {
  if (element.classList.contains('toogle') || element.classList.contains('title-wrapper__title')) {
    element.parentNode.classList.add('is-active');
  } else {
    element.classList.add('is-active');
  }
};

const onCloseAccardion = (element) => {
  if (element.parentNode.classList.contains('is-active')) {
    element.parentNode.classList.remove('is-active');
  } else {
    element.classList.remove('is-active');
  }
};

const onButtonClick = (e) => {
  const element = e.target;
  const availability = document.querySelectorAll('.title-wrapper');

  if (availability.length === 0) {
    onOpenAccardion(element);
  }

  if (element.classList.contains('is-active') || element.parentNode.classList.contains('is-active')) {
    onCloseAccardion(element);
  }

  if (!element.parentNode.classList.contains('is-active') || !element.classList.contains('is-active')) {
    availability.forEach((item)=> {
      item.classList.remove('is-active');
    });
    onOpenAccardion(element);
  }
};

titleWrapper.forEach((toogle) => {
  toogle.addEventListener('click', onButtonClick);
});
