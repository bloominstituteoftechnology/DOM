const dropdownTrigger = document.querySelector('.dropdown-parent');
const dropdownMenu = document.querySelector('.dropdown-menu');

const dropDownAction = (element) => {
  element.addEventListener('mouseover', () => {
    dropdownMenu.style.visibility = 'visible';
  });
  element.addEventListener('mouseout', () => {
    dropdownMenu.style.visibility = 'hidden';
  });
}

dropDownAction(dropdownTrigger);
