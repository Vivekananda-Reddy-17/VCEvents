document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.querySelector(".navbar");

  if (toggler) {
    toggler.addEventListener("click", function () {
      this.classList.toggle("toggled");
    });
  }

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    this.classList.toggle("toggled");
  });

// Select the navbar
const navbar = document.querySelector(".navbar");

// Add scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // When the page is scrolled 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()