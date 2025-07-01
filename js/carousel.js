let currentSlideIndex = 0;
const slides = document.querySelectorAll('.project-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current slide
  if (slides[index]) {
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }
}

function changeSlide(direction) {
  currentSlideIndex += direction;
  
  // Loop back to first slide if at end
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  // Loop to last slide if at beginning
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
} 