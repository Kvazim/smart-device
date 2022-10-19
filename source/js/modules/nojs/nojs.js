const titleWrapper = document.querySelectorAll('.title-wrapper');

titleWrapper.forEach((item) => {
  item.classList.remove('is-active');
});

export {titleWrapper};
