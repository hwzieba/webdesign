var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slides");
  //Hiding the slides
  for (i=0;i<slides.length;i++){
    slides[i].classList.remove("active");
  }
  slideIndex++;
  //Resetting the index
  if (slideIndex > slides.length){
    slideIndex = 1
  }
  //Showing one slide
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 5000);
}