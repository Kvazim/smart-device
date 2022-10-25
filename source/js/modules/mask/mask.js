import imask from 'imask';

const inputsPhone = document.querySelectorAll('[data-mask="phone"]');

const MASK_OPTIONS = {
  mask: '+{7}(000)000-00-00',
};

const createMask = () => {
  if (inputsPhone) {
    inputsPhone.forEach((inputPhone) => {
      imask(inputPhone, MASK_OPTIONS);
    });
  } else {
    return;
  }
};

export {createMask};
