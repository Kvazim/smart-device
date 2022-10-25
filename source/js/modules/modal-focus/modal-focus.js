const callback = document.querySelector('.navigation__callback');
const userNameModal = document.querySelector('[name="username"]');

callback.addEventListener('click', () => {
  setTimeout(() => {
    userNameModal.focus();
  }, 100);
});
