let principalUbication = window.pageYOffset;
window.onscroll = function(){
    let actualDisplacement = window.pageYOffset;
    if(principalUbication >= actualDisplacement){
        document.getElementById("id_header").style.top = '0';
    }else{
        document.getElementById("id_header").style.top = '-80px';      
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