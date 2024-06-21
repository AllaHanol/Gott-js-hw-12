import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";


export function renderPhotos(photos, domElem) {
    const markup = photos
      .map(
        ({
          largeImageURL,
          webformatURL,
          likes,
          comments,
          views,
          downloads,
          tags,
        }) => {
          return `<li class="gallery-item">
              <a class="link-card" href="${largeImageURL}">
                  <img class="image-card" src="${webformatURL}" alt="${tags}"/></a>
                  <ul class="info-list">
                      <li class="info-item">
                          <h3 class="info-title">Likes</h3>
                          <p>${likes}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Views</h3>
                          <p>${views}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Comments</h3>
                          <p>${comments}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Downloads</h3>
                          <p>${downloads}</p>
                      </li>
                  </ul>
          </li>`;
        }
      )
      .join('');
    domElem.innerHTML = markup;
  }