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

let btn = document.getElementById('btnForm');
let body = document.querySelector('body');
let mask = document.querySelector('.mask');
let formContainer = document.querySelector('.formContainer');

btn.addEventListener('click', (e) => {
  mask.classList.add('shadow');
  body.classList.add('shadow');
  formContainer.classList.add('active');
});

let btnReserve = document.getElementById('btnReserve');

btnReserve.addEventListener('click', (e) => {
  e.preventDefault();
  let formReserve = document.querySelector('.formReserve');
  let data = {
    name: formReserve.name.value,
    email: formReserve.email.value,
  };
  mask.classList.remove('shadow');
  body.classList.remove('shadow');
  formContainer.classList.remove('active');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => alert('Table reserved!'));
});

let btnExit = document.getElementById('btnExit');

btnExit.addEventListener('click', (e) => {
  e.preventDefault();
  mask.classList.remove('shadow');
  body.classList.remove('shadow');
  formContainer.classList.remove('active');
});
