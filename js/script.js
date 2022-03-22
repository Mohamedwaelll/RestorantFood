let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

// search
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // section.forEach(sec =>{

    //   let top = window.scrollY;
    //   let heigh = sec.offsetHeight;
    //   let offset = sec.offsetTop -  150;
    //   let id = sec.getAttribute('id');

    //   if(top => offset && top < offset + heigh){
    //     navLinks.forEach(links =>{
    //       links.classList.remove('active');
    //       // document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
    //     });
    //   };
    // });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  var swiper = new Swiper(".review-slide", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0:{
        slidesPerview:1,
      },
      640:{
        slidesPerview:2,
      },
      768:{
        slidesPerview:2,
      },
        1024:{
        slidesPerview:3,
      },
    }
  });


  // loder
  function loder(){
    document.querySelector('.loder-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loder,3000);
  }

  window.onload = fadeOut;