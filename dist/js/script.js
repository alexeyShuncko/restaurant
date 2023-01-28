new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let menu = document.querySelector('.head__menu__container');
let list = document.getElementById('list');

menu.addEventListener('click', () => {
  if (list.classList.contains('active')) {
    list.classList.remove('active');
  } else {
    list.classList.add('active');
  }
});
