import './style.css';

const btnDog = document.querySelector('#btnDog');
const btnCat = document.querySelector('#btnCat');
const btnSurprise = document.querySelector('#btnSurprise');
const image = document.querySelector('#image');

btnDog.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const petURL = data.message;
      image.src = petURL;
    });
});

btnCat.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then(([data]) => {
      const petURL = data.url;
      image.src = petURL;
    });
});

btnSurprise.addEventListener('click', (event) => {
  event.preventDefault();

  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://api.thecatapi.com/v1/images/search'),
  ])
    .then((response) => response.json())
    .then((data) => {
      const petURL = data.message || data[0].url;
      image.src = petURL;
    });
});
