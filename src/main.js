// вся логіка роботи додатка

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import API from './js/pixabay-api';
import { renderImage } from './js/reneder-fanctions';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// отримання refs
const refs = {
  form: document.getElementById('form'),
  searchInput: document.getElementById('input'),
  loader: document.getElementById('loader'),
  gallery: document.getElementById('gallery'),
};

// вішаємо слухач подій на submit форму
refs.form.addEventListener('submit', onSubmit);

//отримання запиту з інпуту і передаємо його у вигляді квері параметру на сервер
function onSubmit(evt) {
  evt.preventDefault();

  refs.loader.style.display = 'inline-block';

  const form = evt.currentTarget;
  const value = form.elements.input.value.trim();

  // якщо інпут не заповнений, інформувати користувача
  if (value === '') {
    iziToast.warning({
      message: 'Please enter a search query',
      messageColor: 'black',
      backgroundColor: '#ffac26',
      position: 'topRight',
      pauseOnHover: false,
      progressBarColor: 'black',
      timeout: 3000,
    });
    return;
  }

  API.getImages(value)
    .then(({ hits }) => {
      console.log(hits);
      if (hits.length === 0) {
        onError();
      }
      return renderImage(hits);
    })
    .then(updateMarkup)
    .catch(onError)
    .finally(() => {
      form.reset();
      refs.loader.style.display = 'none';
    });
}

function updateMarkup(markup) {
  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}

// якщо негативна відповідь, інформувати користувача
function onError(err) {
  console.log(err);
  iziToast.error({
    theme: 'dark',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#ffffff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    pauseOnHover: false,
    progressBarColor: '#b51b1b',
    timeout: 3000,
  });
}
