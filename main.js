AOS.init();

const elements = document.querySelectorAll(".stack");

// Loop through the elements and set their border-radius
elements.forEach((element) => {
  // Calculate the width dynamically for each element
  const width = element.clientWidth;

  // Set the border-radius to be 50% of the calculated width
  element.style.borderRadius = `${width / 2}px`;
});

const elements2 = document.querySelectorAll(".about-text a");

// Loop through the elements and set their border-radius
elements2.forEach((element) => {
  // Calculate the width dynamically for each element
  const width = element.clientWidth;

  // Set the border-radius to be 50% of the calculated width
  element.style.borderRadius = `${width / 2}px`;
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove the '#' character
      const targetElement = document.getElementById(targetId);
      const offset = 70; // Adjust this value as needed

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",

      
      });
    });
  });
});


window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".mobile-nav a");
  const menu = document.querySelector('.hamburger');
  const mobile = document.querySelector('.mobile-nav');

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      menu.classList.remove('is-active');
      mobile.classList.remove('is-active');
      
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove the '#' character
      const targetElement = document.getElementById(targetId);
      const offset = 70; // Adjust this value as needed

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    });
  });
});