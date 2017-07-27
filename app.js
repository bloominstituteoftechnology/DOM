const dropdownTrigger = document.querySelector('.dropdown-parent');
const dropdownMenu = document.querySelector('.dropdown-menu');

const showMenu = (element) => {
  element.addEventListener('mouseover', () => {
    dropdownMenu.style.visibility = 'visible';
  });
}

const hideMenu = (element) => {
  element.addEventListener('mouseout', () => {
    element.style.visibility = 'hidden';
  });
}


showMenu(dropdownTrigger);
hideMenu(dropdownMenu);
