import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '39246673-8495b21e621c9930d57ed1c34',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&${searchParams}`
  );

  return data;
};
