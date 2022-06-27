function submenu() {
  const submenu = document.querySelector('.submenu');
  const trigger = document.querySelector('.width__submenu');
  const arrow = document.querySelector('.submenu__arrow');

  trigger.addEventListener('click', () => {
    submenu.classList.toggle('active');
    arrow.classList.toggle('active');
  });
}
submenu();
