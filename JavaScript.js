//Alert functions
function myFunction() {
  alert("Request has been submitted. You'll shortly receive an E-mail.");
}

function msgFunction() {
  alert("Message has been sent successfully!");
}

//Slider for feedback

document.addEventListener('DOMContentLoaded', () => {
  // Grab the slide container and convert slides into a real Array
  const slidesContainer = document.querySelector('.slides');
  const slideArray = Array.from(document.getElementsByClassName('slide'));//creating array
  let currentIndex = 0;

  // Shift the slides based on the computed width of the first slide
  //The first slide was occupies the width as much as 100% and when the second slide comes, the first slide moves out of the screen to left, thus the slide 1 is no more visible.
  function updateSlide() {
    const slideWidth = slideArray[0].clientWidth; //clientwidth returns the visual width (padding + content) of the element
    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`; //currentIndex is the only variable, it changes automatically or when we click any of the slider buttons
  }

  // Prev/Next buttons
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slideArray.length - 1; //the false part is for the purpose of moving to the last slide
    updateSlide();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < slideArray.length - 1 ? currentIndex + 1 : 0;
    updateSlide();
  });

  // Autoplay
  let autoplayInterval = setInterval(() => nextBtn.click(), 4000);

  //pause on hover
  const sliderEl = document.querySelector('.slider');
  sliderEl.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  sliderEl.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => nextBtn.click(), 4000);
  });

  // Initialize position
  updateSlide();
});

