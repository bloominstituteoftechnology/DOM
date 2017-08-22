(function() {
  const courses = document.getElementsByClassName('courses')[0];

  courses.addEventListener('mouseover', () => {
    const dropdown = document.getElementsByClassName('moreCourses')[0];
    dropdown.style.display = 'block';
  });

  document.getElementsByClassName('courses')[0].addEventListener('mouseover', () => {
    const dropdown = document.getElementsByClassName('moreCourses')[0];
    dropdown.style.display = 'block';
  });
  
  document.getElementsByClassName('moreCourses')[0].addEventListener('mouseover', () => {
    const dropdown = document.getElementsByClassName('moreCourses')[0];
    dropdown.style.display = 'block';
  });
  
  document.getElementsByClassName('moreCourses')[0].addEventListener('mouseout', () => {
      const dropdown = document.getElementsByClassName('moreCourses')[0];
      dropdown.style.display = 'none';
  });
})();