'use strict';
// select the elements
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const section = document.querySelectorAll('.section');

let currentSlide = 0;
const maxslide = section.length; // 3
 
  section.forEach((s, i) => {
    console.log(section);
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
});

// 0% 100% 200%
// addEventListener
btnRight.addEventListener('click', function () {
 
  section.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
});

  if (currentSlide === maxslide -1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
});

btnLeft.addEventListener('click', function () {
   
   if (currentSlide === 0) {
    currentSlide = maxslide - 1;
  } else {
    currentSlide --;
  }

  section.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
});
});
