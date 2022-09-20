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

var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", reveal);

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

const form = document.getElementById("form");
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const iconRights = document.querySelectorAll("#icon-right");
const iconErrors = document.querySelectorAll("#icon-error");
const messageError = document.querySelectorAll(".modal-input-error");
const inputs = document.querySelectorAll(".field");
const expressions = {
  name: /^[a-zA-Z\_\-]{4,16}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validateForm = (e) => {
  switch (e.target.id) {
    case "name":
      if(expressions.name.test(e.target.value)){
        iconErrors[0].style.visibility = "hidden";
        iconRights[0].style.visibility = "visible";
        messageError[0].style.visibility = "hidden";
      }else{
        iconRights[0].style.visibility = "hidden";
        iconErrors[0].style.visibility = "visible";
        messageError[0].style.visibility = "visible";
      }

      if(e.target.value == ""){
        iconRights[0].style.visibility = "hidden";
        iconErrors[0].style.visibility = "hidden";
        messageError[0].style.visibility = "hidden";
      }
      break;
    case "email":
      if(expressions.email.test(e.target.value)){
        iconErrors[1].style.visibility = "hidden";
        iconRights[1].style.visibility = "visible";
        messageError[1].style.visibility = "hidden";
      }else{
        iconRights[1].style.visibility = "hidden";
        iconErrors[1].style.visibility = "visible";
        messageError[1].style.visibility = "visible";
      }
      if(e.target.value == ""){
        iconRights[1].style.visibility = "hidden";
        iconErrors[1].style.visibility = "hidden";
        messageError[1].style.visibility = "hidden";
      }
      break;
      case "message":
        if(e.target.value == ""){
          iconRights[2].style.visibility = "hidden";
          iconErrors[2].style.visibility = "visible";
          messageError[2].style.visibility = "visible";
        }else{
          iconErrors[2].style.visibility = "hidden";
          iconRights[2].style.visibility = "visible";
          messageError[2].style.visibility = "hidden";
        }
        break;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

if (name != null && email != null && message != null) {
  form.addEventListener("submit", function (e,) {
    const nameSent = document.getElementById("name").value;
    const emailSent = document.getElementById("email").value;
    const messageSent = document.getElementById("message").value;
    e.preventDefault();
    window.location.href = `mailto:davidmarquez2222@outlook.com?subject=Hello, my name is ${nameSent}; ${emailSent}&body= ${messageSent}`;
  })
}

