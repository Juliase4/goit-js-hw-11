// функції для HTTP-запитів

const URL = 'https://pixabay.com/api/';
const API_KEY = '42600049-cf2a2f9bce39b2068dfff6d8c';
function getImages(query) {
  const queryUser = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  return fetch(`${URL}?key=${API_KEY}&${queryUser}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(err => console.log(err));
}

export default { getImages };
