/* eslint-disable no-unused-vars */
import { fetchCall } from '../utils/ajax';
import { API_CONSTANTS, API_METHODS } from '../constants/api-constant';

export const getCategoryDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.CATEGORY_DETAILS}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };
  