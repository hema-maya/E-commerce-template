window.addEventListener( "load" , () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener( "transitionend" , () => {
        document.body.removeChild(loader);
    });
});

var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontent");

function opentab(tabname) {
    for ( tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for ( tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-content");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-color", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-color";
}

function myPay() {
    document.getElementById("Contact").style.display = "block";
}