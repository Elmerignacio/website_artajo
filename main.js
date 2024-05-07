 

const scroller = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
addAnimation();
}

function addAnimation (){
  scroller.forEach(scroller => {
    scroller.setAttribute('data-animated', true);
  })
}

let lastScrollTop = 0;
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navMenu.classList.add('hidden');
    } else {
      navMenu.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  const menuBtn = document.getElementById('menu-btn');

  // Adding event listener to the menu button
  menuBtn.addEventListener('click', function() {
    // Selecting navigation menu
    const navMenu = document.getElementById('nav-menu');
    // Toggle the 'hidden' class on the navigation menu
    navMenu.classList.toggle('hidden');
  });
  
  // Adding event listener to close the menu when a menu item is clicked
  const menuLinks = document.querySelectorAll('#nav-menu ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Selecting navigation menu
      const navMenu = document.getElementById('nav-menu');
      // Hide the navigation menu
      navMenu.classList.add('hidden');
    });
  });
