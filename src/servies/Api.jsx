import axios from 'axios';

const API_KEY = '29436484-c6ad55a4fc43be985da26569b';
export const fetchImages = async (guery, page) => {
  const images = await axios.get(
    `https://pixabay.com/api/?q=${guery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return images.data;
};
