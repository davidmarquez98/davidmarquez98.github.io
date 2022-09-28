/* LOADER */
window.addEventListener("load", function () {
  document.getElementById("loader").classList.toggle("loaderGone");
});


/* STICKING HEADER */

let principalUbication = window.pageYOffset;
window.onscroll = function () {
  let actualDisplacement = window.pageYOffset;
  if (principalUbication >= actualDisplacement) {
    document.getElementById("header-id").style.top = '0';
  } else {
    document.getElementById("header-id").style.top = '-80px';
  }
  principalUbication = actualDisplacement;
}

/* SWIPER */
var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* FADE REVEAL SECTION */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 80;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* MODAL WINDOW */
const openModal = document.getElementById("open-modal");
const openModalTwo = document.getElementById("open-modal-two")
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
})

openModalTwo.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
})

closeModal.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
})

/* SENT FORM*/
const form = document.getElementById("form");
const iconsRight = document.querySelectorAll("#icon-right");
const iconsError = document.querySelectorAll("#icon-error");
const messagesError = document.querySelectorAll(".modal-input-error");
const inputs = document.querySelectorAll(".field");
const expressions = {name: /^[a-zA-Z\_\-]{4,16}$/, email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/};


function changeToError(iconError, iconRight, message, input) {
  iconError.style.visibility = "visible";
  iconRight.style.visibility = "hidden";
  message.style.visibility = "visible";
  input.style.border = "1px solid red";
}

function changeToRight(iconError, iconRight, message, input) {
  iconError.style.visibility = "hidden";
  message.style.visibility = "hidden";
  iconRight.style.visibility = "visible";
  input.style.border = "1px solid green";
}

function eraseError(iconError, iconRight, message, input){
  iconError.style.visibility = "hidden";
  message.style.visibility = "hidden";
  iconRight.style.visibility = "hidden";
  input.style.border = "1px solid white";
}

function validateName(name){
  if (expressions.name.test(name)) {
        changeToRight(iconsError[0], iconsRight[0], messagesError[0], inputs[0]);
      } else{
        changeToError(iconsError[0], iconsRight[0], messagesError[0], inputs[0]);
      }
}

function validateEmail(email){
  if (expressions.email.test(email)) {
    changeToRight(iconsError[1], iconsRight[1], messagesError[1], inputs[1]);
  } else {
    changeToError(iconsError[1], iconsRight[1], messagesError[1], inputs[1]);
  }
}

function validateMessage(message){
  if (message == "") {
    changeToError(iconsError[2], iconsRight[2], messagesError[2], inputs[2]);
  } else {
    changeToRight(iconsError[2], iconsRight[2], messagesError[2], inputs[2]);
  }
}

const validateForm = (e) => {
  switch (e.target.id) {
    case "name":
      if(e.target.value == ""){
        eraseError(iconsError[0], iconsRight[0], messagesError[0], inputs[0]);
      }else{
        validateName(e.target.value);
      }   
      break;
    case "email":
        if (e.target.value == "") {
          eraseError(iconsError[1], iconsRight[1], messagesError[1], inputs[1]);
        }else{
          validateEmail(e.target.value);
        }
      break;
    case "message":
      eraseError(iconsError[2], iconsRight[2], messagesError[2], inputs[2]);
      break;
  }
}
inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});


form.addEventListener("submit", function (e) {
  const nameSent = document.getElementById("name").value;
  const emailSent = document.getElementById("email").value;
  const messageSent = document.getElementById("message").value;
  const messageError = document.querySelector(".modal-message-error-container");

  if (expressions.name.test(nameSent) && expressions.email.test(emailSent) && messageSent != "" && messageSent != null) {
    e.preventDefault();
    messageError.style.visibility = "hidden";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    window.location.href = `mailto:davidmarquez2222@outlook.com?subject=Hello, my name is ${nameSent}; ${emailSent}&body= ${messageSent}`;
  } else {
    e.preventDefault();
    validateName(nameSent);
    validateEmail(emailSent);
    validateMessage(messageSent);
    messageError.style.visibility = "visible";
  }
})


const barsButton = document.getElementById("bars-button");
const headerList = document.querySelector(".header-list-container");
var timesClick = 0;
  
barsButton.addEventListener("click",function(){
  if(timesClick == 0){
    timesClick = 1;
    headerList.style.transform = "translateY(200%)";
  }else{
    timesClick = 0;
    headerList.style.transform = "translateY(-200%)";
  }
})

var screen = parseInt(screen.width.toString())
if (screen < 850) {
  const socialmediaClass = document.querySelector(".socialmedias-hover");
  socialmediaClass.className = "socialmedias";
  const openSubmenu = document.getElementById("open-submenu");
  var timesClickSubmenu = 0;

  swiper = new Swiper(".slider-content", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  openSubmenu.addEventListener("click",function(){
    const submenu = document.querySelector(".header-submenu"); 
    if(timesClickSubmenu == 0){
      timesClickSubmenu = 1;
      submenu.style.transform = "translateY(-5%)";
      submenu.style.opacity = "1";
      submenu.style.visibility = "visible";
      openSubmenu.style.backgroundColor = "#F5B7B1";
    }else{
      timesClickSubmenu = 0;
      submenu.style.transform = "translateY(-100%)";
      submenu.style.opacity = "0";
      submenu.style.visibility = "hidden";
      openSubmenu.style.backgroundColor = "#0C0C0C";
    }
  })
}











