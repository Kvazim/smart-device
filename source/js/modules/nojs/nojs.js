const titlesWrapper = document.querySelectorAll('.title-wrapper');

const removeActiv = () => {
  titlesWrapper.forEach((titleWrapper) => {
    titleWrapper.classList.remove('is-active');
  });
};

export {titlesWrapper, removeActiv};
