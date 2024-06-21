'use strict';
import { fetcPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';
import imageUrl from './img/bi_x-octagon.png';

const refs = {
  loader: document.querySelector('.loader'),
  galleryBox: document.querySelector('.gallery-box'),
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('form'),
};
const lightbox = new SimpleLightbox('.link-card', {
  captionsData: 'alt',
  captionDelay: 250,
});
const iziToastSet = {
    message: `Sorry, there are no images matching your search query. Please try again!`,
    messageSize: '16',
    messageColor: '#fff',
    messageLineHeight: '24',
    title: 'Error',
    titleColor: '#fff',
    titleSize: '16',
    titleLineHeight: '24',
    backgroundColor: '#EF4040',
    position: 'topRight',
    close: true,
    closeOnEscape: true,
    closeOnClick: true,
    progressBar: true,
    progressBarColor: '#B51B1B',
    iconUrl: imageUrl,
    imageWidth: 24,
};

let search = '';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  search = refs.form.elements.search.value.trim();
  if (search === '') {
    return;
  }
  refs.galleryBox.style.display = 'none';
  refs.loader.style.display = 'block';
  fetcPhotos(search)
    .then(data => {
      refs.loader.style.display = 'none';
      refs.galleryBox.style.display = 'block';
      if (data.hits.length > 0) {
        renderPhotos(data.hits, refs.gallery);
        lightbox.refresh();
      } else {
        iziToast.show(iziToastSet);
        // refs.gallery.innerHTML = '';//Зображення з попереднього запиту зникають, якщо нічого не знайдено
        renderPhotos(data.hits, refs.gallery);
      }
    })
    .catch(error => console.log('Error:', error));
  refs.form.reset();
});
