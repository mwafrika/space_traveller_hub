/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const getAll = () => axios.get(url);

export const missionsService = { getAll };
