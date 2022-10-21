const aboutbtn = document.querySelector('.about-content__button');
const aboutContent = document.querySelector('.about-content__subtitle');

const aboutHeight = aboutContent.style.height;

const showContent = () => {
  aboutContent.classList.add('is-show');
  aboutContent.style.height = 'auto';
  aboutbtn.textContent = 'Свернуть';
};

const closeContent = () => {
  aboutContent.classList.remove('is-show');
  aboutContent.style.height = aboutHeight;
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
