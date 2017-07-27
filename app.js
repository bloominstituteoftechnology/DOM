const dropdownTrigger = document.querySelector('.dropdown-parent');

const dropDownAction = (element) => {
  element.addEventListener('mouseover', (e) => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    e.target.style.visibility = 'hidden';
  });
  element.addEventListener('mouseout', (e) => {
    e.target.style.visibility = 'visible';
  });
}

dropDownAction(dropdownTrigger);
