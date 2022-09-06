let principalUbication = window.pageYOffset;
window.onscroll = function(){
    let actualDisplacement = window.pageYOffset;
    if(principalUbication >= actualDisplacement){
        document.getElementById("header-id").style.top = '0';
    }else{
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

  window.addEventListener("scroll",reveal);

  function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 80;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
  }

  const openModal = document.getElementById("open-modal");
  const closeModal = document.getElementById("close-modal");
  const modal = document.getElementById("modal");
  
  openModal.addEventListener("click",function(){
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
  })

  closeModal.addEventListener("click", function(){
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  })

  const buttonSend = document.getElementById("send-mail");
  buttonSend.addEventListener("click",function(e){
    e.preventDefault();
    window.location.href = "mailto:davidmarquez2222@outlook.com";

  })