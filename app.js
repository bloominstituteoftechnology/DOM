const dropdownTrigger = document.querySelector('.dropdown-parent');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navLinks = document.getElementsByClassName('nav-link');

// const dropdownAction = () => {
  // const hideMenuHelper = (element) => {
  //   if (dropdownMenu.style.visibility === 'visible') {
  //     element.addEventListener('mousever', () => {
  //       console.log('hovering!');
  //       dropdownMenu.style.visibility = 'hidden';
  //     });
  //   }
  // }

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

// hideMenuHelper(navLinks);
showMenu(dropdownTrigger);
hideMenu(dropdownMenu);

// dropdownAction();
