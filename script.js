// variables

const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const scrollButton = document.querySelector("#BtnTop");
const header = document.getElementById("header");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone-number");
const address = document.getElementById("address");
const mealName = document.getElementById("meal-name");
const quantity = document.getElementById("quantity");
const errorMessage = document.getElementById("error");


// event listeners 

menuBar.addEventListener("click", responsiveNavbar);
window.addEventListener("scroll", scrollFunction);
scrollButton.addEventListener("click", topFunction);
window.addEventListener("scroll", hideNavbar);
form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkInputs();
}
)


// responsive navbar

function responsiveNavbar() {
    menuBar.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}


// scroll to top button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// hide header on scroll

let prevScrollpos = window.pageYOffset;

function hideNavbar() {

  // remove responsive navbar on scroll
  menuBar.classList.remove("fa-times");
  navbar.classList.remove("active");

  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-7.3rem";
  }
  prevScrollpos = currentScrollPos;
}


// form validation / error message

function checkInputs() {

  const arrValues = [];

  const nameValue = nameInput.value.trim();
  const emailValue = email.value.trim();
  const telephoneValue = telephone.value.trim();
  const addressValue = address.value.trim();
  const mealValue = mealName.value.trim();
  const quantityValue = quantity.value.trim();
  
  arrValues.push(nameValue, emailValue, telephoneValue, addressValue, mealValue, quantityValue);
  
  for (let i = 0; i < arrValues.length; i++) {

    if (arrValues[i] === "") {
      
      errorMessage.innerHTML = "You need to fill in your personal details and meal choice!"
      errorMessage.classList.add("show");
  
      setTimeout(() => {
      errorMessage.classList.remove("show");
      }, 4000);
} 
  }

};

