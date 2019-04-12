/*jshint esversion: 6 */
// this is the data for holding which page we're on
let pageNumber = 0;

// have the content for these pages
const pages = [{
    copy: "a London-based photographer and designer",
    // background: '#FF005B',
    background: 'linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(166, 45, 253, 1) 100%)',
    circle: '#3e78ed'
  },
  {
    copy: "related to Pierce Brosnan",
    // background: '#FF966B',
    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(30,11,213,1) 100%)',
    circle: '#e34a47'
  },
  {
    copy: "looking for a job at the start of October",
    // background: '#FEFFE0',
    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(221,36,198,1) 100%)',
    circle: '#f7fe00'
  },
  {
    copy: `letting you <a href="pdf.pdf">download her PDF</a>`,
    // background: '#779AFF',
    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(100,45,253,1) 100%)',
    circle: '#b472e6'
  }
];

// pick the relevant tags
const nextTag = document.querySelector('.next');
const previousTag = document.querySelector('.previous');
const randomTag = document.querySelector('.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

// make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length);

  updateSection();
};

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundImage = pages[pageNumber].background;
};

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next();
});

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous();
});

// on click of randomTag, run this
randomTag.addEventListener('click', function() {
  random();
});

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(keyPress) {
  console.log(event);

  // if the key being pressed is ArrowRight
  if (keyPress.key == 'ArrowRight') {
    next();
  }

  // if the key being pressed is ArrowLeft
  if (keyPress.key == 'ArrowLeft') {
    previous();
  }
});