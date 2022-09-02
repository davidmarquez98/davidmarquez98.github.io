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


  const btnSwitch = document.querySelector("#switch");

  btnSwitch.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
  })