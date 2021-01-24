import axios from 'axios';

const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json';

export const fetchBooks = () => axios.get(url);