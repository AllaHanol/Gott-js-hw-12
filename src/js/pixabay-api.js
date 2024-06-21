
import iziToast from 'izitoast';


export function fetcPhotos(search) {
    const BASE_URL = 'https://pixabay.com/';
    const END_POINT = 'api/';
    const params = new URLSearchParams({
      key: '44400014-e8ce3fc6f032fabdec0605d2e',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
  
    const url = `${BASE_URL}${END_POINT}?${params}`;
  
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error:', error));
  }