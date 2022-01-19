let accederForm = document.querySelector(".acceso-form-container");

document.querySelector("#acceso-btn").onclick = () =>{
    accederForm.classList.toggle("active");
}

document.querySelector("#close-acceso-btn").onclick = () =>{
    accederForm.classList.remove("active");
}

busquedaForm = document.querySelector(".busqueda-form");

document.querySelector("#busqueda-btn").onclick = () => {
    busquedaForm.classList.toggle("active");
}

window.onscroll = () =>{
    busquedaForm.classList.remove("active");

    if(window.scrollY > 80){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }

    fadeOut();
}


function loader(){
    document.querySelector('.cargando-container').classList.add('active');
    }

function fadeOut(){
    setTimeout(loader, 4000);
}


var swiper = new Swiper(".libros-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".destacados-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        450: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".articulos-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});