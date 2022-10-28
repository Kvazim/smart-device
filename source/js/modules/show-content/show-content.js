const aboutbtn = document.querySelector('.about-content__button');
const aboutContent = document.querySelector('.about-content__subtitle');

const showContent = () => {
  aboutContent.classList.add('is-show');
  aboutbtn.textContent = 'Свернуть';
};

const closeContent = () => {
  aboutContent.classList.remove('is-show');
  aboutbtn.textContent = 'подробнее';
};

const changeContent = () => {
  if (aboutContent.classList.contains('is-show')) {
    closeContent();
  } else {
    showContent();
  }
};

aboutbtn.addEventListener('click', changeContent);
