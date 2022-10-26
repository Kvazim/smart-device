import {titlesWrapper, removeActiv} from '../nojs/nojs';

const onOpenAccordion = (element) => {
  if (element.classList.contains('toogle') || element.classList.contains('title-wrapper__title')) {
    element.parentNode.classList.add('is-active');
  } else {
    element.classList.add('is-active');
  }
};

const onCloseAccordion = (element) => {

  if (element.parentNode.classList.contains('is-active')) {
    element.parentNode.classList.remove('is-active');
  } else {
    element.classList.remove('is-active');
  }
};

const onButtonClick = (e) => {
  const element = e.target;

  if (element.classList.contains('is-active') || element.parentNode.classList.contains('is-active')) {
    onCloseAccordion(element);
    return;
  }

  if (!element.parentNode.classList.contains('is-active') || !element.classList.contains('is-active')) {
    removeActiv();
    onOpenAccordion(element);
    return;
  }
};

titlesWrapper.forEach((toogle) => {
  toogle.addEventListener('click', onButtonClick);
});
