const BaseURL = {
  BASE_URL: `${process.env.REACT_APP_BASE_URL}`
};

export const API_CONSTANTS = {
 CATEGORY_DETAILS:`${BaseURL.BASE_URL}/category/CreateCategory`,
 MENU_DETAILS:`${BaseURL.BASE_URL}/mainmenu/Createmenu`,
 POST_LIST:`${BaseURL.BASE_URL}/Blog/BlogPost`,
 ADMIN_REGISTRATION:`${BaseURL.BASE_URL}/Admin/Register`,
 ADMIN_LOGIN:`${BaseURL.BASE_URL}/Admin/Login`,
 GET_ADMIN_REGISTRATION:`${BaseURL.BASE_URL}/Admin/Register`,
 USER_REGISTRATION:`${BaseURL.BASE_URL}/UserRegister/UserRegister`,
 USER_TOKEN:`${BaseURL.BASE_URL}/UserRegister/UserSignin`,
 USER_SUBSCRIPTION:`${BaseURL.BASE_URL}/Subscribe/UserSubscribe`,
 USER_COMMENT:`${BaseURL.BASE_URL}/Comment/PostComment`,
 GET_USER_COMMENT:`${BaseURL.BASE_URL}/Comment/PostComment`,
 GET_REPLY_COMMENTS:`${BaseURL.BASE_URL}/Comment/ReplyComment`,
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
  PUT: 'PUT'
};

