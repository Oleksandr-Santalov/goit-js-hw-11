import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '42766029-567d6e2a9026e1efb72d58ec2';
const BASE_URI = 'https://pixabay.com/api/';

export function getImages(query) {
  const searchSettingObj = {
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const searchSetting = new URLSearchParams(searchSettingObj);
  const LINK = `${BASE_URI}?${searchSetting}`;
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Search failed');
      }
      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      console.log(data.hits);
      return data.hits;
    })
    .catch(error => {
      console.log(`${error}`);
    });
}
