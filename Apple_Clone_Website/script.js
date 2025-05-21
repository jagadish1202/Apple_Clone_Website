const iconContainer = document.getElementById('icon-container');
const navLinks = document.querySelector('.navlinks');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const navLinkElements = document.querySelectorAll('.navlink a')

//toggle the menu icons and nav links
iconContainer.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  openIcon.style.display = 
    openIcon.style.display === 'none' ? 'block' : 'none';
  closeIcon.style.display =
    closeIcon.style.display === 'none' ? 'block' : 'none';
});

//close the menu when a link is clicked
navLinkElements.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});
