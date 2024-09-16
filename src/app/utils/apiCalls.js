import { fetchCall, fetchLoginCall } from '../utils/ajax';
import { API_CONSTANTS, API_METHODS } from '../constants/api-constant';

export const getCategoryDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.CATEGORY_DETAILS}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };
  
  export const getMenuDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.MENU_DETAILS}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const getPostList = (callback, payload) => {
    const url = `${API_CONSTANTS.POST_LIST}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const adminRegistartion = (callback, payload) => {
    const url = `${API_CONSTANTS.ADMIN_REGISTRATION}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const getRegistrationDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.GET_ADMIN_REGISTRATION}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const adminLogin = (callback, payload) => {
    const url = `${API_CONSTANTS.ADMIN_LOGIN}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const userRegistartion = (callback, payload) => {
    const url = `${API_CONSTANTS.USER_REGISTRATION}`;
    return fetchLoginCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const userToken = (callback, payload) => {
    const url = `${API_CONSTANTS.USER_TOKEN}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const getUserToken = (callback, payload) => {
    const url = `${API_CONSTANTS.GET_USER_TOKEN}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const userSubscribe = (callback, payload) => {
    const url = `${API_CONSTANTS.USER_SUBSCRIPTION}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const userComment = (callback, payload) => {
    const url = `${API_CONSTANTS.USER_COMMENT}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const getUserComments = (callback, payload) => {
    const url = `${API_CONSTANTS.GET_USER_COMMENT}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const getReplyComments = (callback, payload) => {
    const url = `${API_CONSTANTS.GET_REPLY_COMMENTS}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };
