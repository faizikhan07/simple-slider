'use strict';
// select the elements
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const section = document.querySelectorAll('.section'); // change to an array

let currentSlide = 0;
const maxslide = section.length; // 3

// the way that show the first slide for the user
const showPerson = function () {
  section.forEach((sections, index) => {
    sections.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    // 100 * i = 0 curr =0 => 100 *
    // 100 * i = 1 curr 0 => 100%
    // 100 * i = 2 curr 0 => 200%
  });
};
showPerson();

//show next person

const nextSlide = function () {
  if (currentSlide === maxslide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showPerson();
};

const prerviewSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxslide - 1;
  } else {
    currentSlide--;
  }

  showPerson();
};
btnRight.addEventListener('click', nextSlide);
//show last person
btnLeft.addEventListener('click', prerviewSlide);

// document
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prerviewSlide();
});
