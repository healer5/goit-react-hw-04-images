// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const params = {
//   key: '22840960-ea2b07fd8d407a17e77cd52c1',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
//   per_page: 12,
//   isImageModalOpen: false,
// };

// export const fetchImages = async (query, page) => {
//   const response = await axios.get(`/?q=${query}&page=${page}`, { params });
//   return response.data;
// };
import axios from 'axios';

const API_KEY_PIXABAY = '29175615-30f269a9a3b7d578ba66f288c';

export const fetchImages = async (request, page) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${request}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
  const result = await axios.get(URL);
  return result.data;
};
