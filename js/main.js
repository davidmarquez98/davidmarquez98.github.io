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
const messageError = document.querySelectorAll(".modal-input-error");
const inputs = document.querySelectorAll(".field");
const expressions = {
  name: /^[a-zA-Z\_\-]{4,16}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

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

function erase(iconError, iconRight, message, input) {
  iconRight.style.visibility = "hidden";
  iconError.style.visibility = "hidden";
  message.style.visibility = "hidden";
  input.style.border = "1px solid white";
}

const validateForm = (e) => {
  switch (e.target.id) {
    case "name":
      if (expressions.name.test(e.target.value)) {
        changeToRight(iconsError[0], iconsRight[0], messageError[0], inputs[0])
      } else {
        changeToError(iconsError[0], iconsRight[0], messageError[0], inputs[0])

      }

      if (e.target.value == "") {
        erase(iconsError[0], iconsRight[0], messageError[0], inputs[0]);
      }
      break;
    case "email":
      if (expressions.email.test(e.target.value)) {
        changeToRight(iconsError[1], iconsRight[1], messageError[1], inputs[1])
      } else {
        changeToError(iconsError[1], iconsRight[1], messageError[1], inputs[1])
      }
      if (e.target.value == "") {
        erase(iconsError[1], iconsRight[1], messageError[1], inputs[1]);
      }
      break;
    case "message":
      if (e.target.value == "") {
        changeToError(iconsError[2], iconsRight[2], messageError[2], inputs[2]);
      } else {
        changeToRight(iconsError[2], iconsRight[2], messageError[2], inputs[2]);
      }
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
  if (expressions.name.test(nameSent) && expressions.email.test(emailSent) && messageSent != "" && messageSent != null) {
    e.preventDefault();
    window.location.href = `mailto:davidmarquez2222@outlook.com?subject=Hello, my name is ${nameSent}; ${emailSent}&body= ${messageSent}`;
  } else {
    console.log("error");
  }
})





