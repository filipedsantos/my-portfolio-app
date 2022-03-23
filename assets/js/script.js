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
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

const modal = function (modalClick) {
  modalViews[modalClick].classList.add('active__modal');
};

const modalClose = function (modalClick) {
  modalViews[modalClick].classList.remove('active__modal');
};

modalBtns.forEach((btn, i) =>
  btn.addEventListener('click', () => {
    modal(i);
  })
);

modalCloses.forEach((btn, i) =>
  btn.addEventListener('click', () => {
    console.log('click');
    modalClose(i);
  })
);
