'use strict';

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

//   Menu show/hidden
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// hide menu when some button it's pressed
const navLink = document.querySelectorAll('.nav__link');
const linkAction = function () {
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Open/close Skills --- Event Delegation
// const skillsContent = document.getElementsByClassName('skills__content');
// const skillsHeader = document.querySelectorAll('.skills__header');

// const toogleSkills = function () {
//   let itemClass = this.parentNode.getElementsByClassName;

//   for (let i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = 'skills__content skills__close';
//   }
//   if (itemClass === 'skills__content skills__close') {
//     this.parentNode.className = 'skills__content skills__open';
//   }
// };

// skillsHeader.forEach((el) => el.addEventListener('click', toogleSkills));

// Tabbed component

const skillsHeaders = document.querySelectorAll('.skills__header');
const skillsContent = document.querySelectorAll('skills__content');
const skillsContainer = document.querySelector('.skills__container');

// Event delegation
skillsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  const clicked = e.target.closest('.skills__content');
  console.log(clicked);

  // guard clause
  if (!clicked) return;

  if (clicked.classList.contains('skills__open')) {
    clicked.classList.remove('skills__open');
    clicked.classList.add('skills__close');
  } else {
    clicked.classList.add('skills__open');
    clicked.classList.remove('skills__close');
  }
});

// Qualification tabs

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');

    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});

// Modal windows Services
const modalViews = document.querySelectorAll('.services__modal');
// const modalBtns = document.querySelectorAll('.services__button');
// const modalCloses = document.querySelectorAll('.services__modal-close');

const modalContainer = document.querySelector('.services__container');

// const modal = function (modalClick) {
//   modalViews[modalClick].classList.add('active__modal');
// };

// const modalClose = function (modalClick) {
//   modalViews[modalClick].classList.remove('active__modal');
// };

// modalBtns.forEach((btn, i) =>
//   btn.addEventListener('click', () => {
//     modal(i);
//   })
// );

// modalCloses.forEach((btn, i) =>
//   btn.addEventListener('click', () => {
//     console.log('click');
//     modalClose(i);
//   })
// );

// Event delegation
modalContainer.addEventListener('click', function (e) {
  // Matching strategy
  const open = e.target.closest('.services__button');
  if (open) {
    modalViews[open.dataset.modal].classList.add('active__modal');
  }

  const close = e.target.closest('.services__modal');
  if (close) {
    close.classList.remove('active__modal');
  }
});

// Scroll sections active link
// TODO Modify code to new method -- isIntersecting
const sections = document.querySelectorAll('section[id]');
//console.log(sections);
let sectionId;

const scrollActive = function () {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

// change background header
const scrollHeader = function () {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

// show scrollTop
const scrollTop = function () {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollTop);

// dark/light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
