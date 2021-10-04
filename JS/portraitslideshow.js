

var container = document.getElementsByClassName("description-container")[0];

  function slidemargins1() {
    container.classList.remove("slide1");
    container.classList.remove("slide2");
    container.classList.remove("slide3");
    container.classList.add("slide1");
  }

  function slidemargins2() {
    container.classList.remove("slide1");
    container.classList.remove("slide2");
    container.classList.remove("slide3");
    container.classList.add("slide2");
  }

  function slidemargins3() {
    container.classList.remove("slide1");
    container.classList.remove("slide2");
    container.classList.remove("slide3");
    container.classList.add("slide3");
  }



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("portraitslides");
  var dots = document.getElementsByClassName("slidepreview");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeslide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeslide";

}


