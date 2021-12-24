const BaseURL = {
  BASE_URL: `${process.env.REACT_APP_BASE_URL}`
};

export const API_CONSTANTS = {
 CATEGORY_DETAILS:`${BaseURL.BASE_URL}/Category/CreateCategory`,
 MENU_DETAILS:`${BaseURL.BASE_URL}/Mainmenu/Createmenu`,
 POST_LIST:`${BaseURL.BASE_URL}/Blog/BlogPost`,
 ADMIN_REGISTRATION:`${BaseURL.BASE_URL}/Admin/Register`,
 ADMIN_LOGIN:`${BaseURL.BASE_URL}/Admin/Login`,
 GET_REGISTRATION:`${BaseURL.BASE_URL}/Admin/Register`
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
  PUT: 'PUT'
};

