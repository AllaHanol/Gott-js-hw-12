
import iziToast from 'izitoast';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export async function fetchPhotos(search, page) {
    const response = await axios.get('api/', {
      params: {
        key: '44400014-e8ce3fc6f032fabdec0605d2e',
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: 15,
       }
    })
   
  return response.data;
   }