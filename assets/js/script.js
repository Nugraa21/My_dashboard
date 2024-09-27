'use strict';



// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler, "click", toggleNavbar);


/**
 * back top btn
 */

const BackTopBtn = document.querySelector("[data-back-to-top]");

const activeElem = function () {
  console.log("Scrolled!");
  if (window.scrollY > 50) {
    header.classList.add("active");
    BackTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    BackTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElem);

//------------------------

        // Prevent various actions like F12, Ctrl+U, right-click, etc.
        document.addEventListener('keydown', function(event) {
          if (event.key === 'F12' || (event.ctrlKey && event.key === 'u')) {
              event.preventDefault();
              showAlert();
          }
      });

      document.addEventListener('contextmenu', function(event) {
          event.preventDefault();
          showAlert();
      });

      document.addEventListener('selectstart', function(event) {
          event.preventDefault();
          showAlert();
      });

      document.addEventListener('copy', function(event) {
          event.preventDefault();
          showAlert();
      });

      document.addEventListener('keydown', function(event) {
          if (event.ctrlKey && event.key === 's') {
              event.preventDefault();
          }
      });


//-----------------------Selec Porfolio
function showCategory(category) {
  // Menyembunyikan semua kategori
  const items = document.querySelectorAll('.product-item');
  items.forEach(item => {
    item.style.display = 'none'; // Menyembunyikan semua item
  });

  // Menampilkan kategori yang dipilih
  if (category === 'all-portfolio') {
    items.forEach(item => {
      item.style.display = 'block'; // Menampilkan semua item
    });
  } else {
    const selectedItems = document.querySelectorAll(`#${category}, #${category}-2`);
    selectedItems.forEach(item => {
      item.style.display = 'block'; // Menampilkan item yang sesuai dengan kategori
    });
  }
}

// Menampilkan kategori "ALL" saat pertama kali halaman dibuka
document.addEventListener("DOMContentLoaded", function() {
  showCategory('all-portfolio');
});