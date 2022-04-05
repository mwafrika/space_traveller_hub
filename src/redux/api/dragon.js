/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/dragons';

export const getDragons = () => axios.get(url);
