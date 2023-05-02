let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const pages = document.querySelectorAll('.switcher')
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const button = document.getElementById('button');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.style.display = 'none';
closeMenu.style.display = 'none';

button.addEventListener('click', (event) => {
   if (openMenu.style.display == 'none') {
      openMenu.style.display = 'block';
      button.style.display = 'none';
      closeMenu.style.display = 'block';
   } else {
      openMenu.style.display = 'none';
   }
});

closeMenu.addEventListener('click', (event) => {
   if (openMenu.style.display !== 'none') {
      closeMenu.style.display = 'none';
      button.style.display = 'block';
      openMenu.style.display = 'none';
   }
});

items.forEach((item) => {
   item.style.minWidth = `${itemWidth}px`;
});

pages.forEach((page) => {
   page.style.display = 'flex';
});

btnNext.addEventListener('click', () => {
   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
   position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
});

btnPrev.addEventListener('click', () => {
   const itemsLeft = Math.abs(position) / itemWidth;
   position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
});

const setPosition = () => {
   track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
   btnPrev.disabled = position === 0;
   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
