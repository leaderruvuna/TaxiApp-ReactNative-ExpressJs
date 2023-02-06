import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const httpFactory = axios.create({
   baseURL: `${BASE_URL}`,
   headers: {
      Accept: 'application/json',
      'content-type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      ' Access-Control-Allow-Origin': `${BASE_URL}`,
      'Access-Control-Allow-Methods:': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
   },
});
