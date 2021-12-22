const BaseURL = {
  BASE_URL: `${process.env.REACT_APP_BASE_URL}`
};

export const API_CONSTANTS = {
 CATEGORY_DETAILS:`${BaseURL.BASE_URL}/category/`,
 MENU_DETAILS:`${BaseURL.BASE_URL}/mainmenu/`,
 POST_LIST:`${BaseURL.BASE_URL}/Blog/`
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
  PUT: 'PUT'
};

