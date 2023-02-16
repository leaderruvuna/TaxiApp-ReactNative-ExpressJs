import axios from 'axios';
import { BASE_URL, CLOUDINARY_URL } from '../constants/urls';
export const httpFactory = axios.create({
   baseURL: `${BASE_URL}`,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': '*',
      // 'Access-Control-Allow-Methods:': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
   },
});

export const httpCloudFactory = axios.create({
   baseURL: `${CLOUDINARY_URL}`,
   headers: {
      Accept: 'application/json',
   },
});
