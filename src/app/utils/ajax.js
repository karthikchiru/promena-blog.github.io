/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
export function fetchCall(callback, url, method, payload) {
  // debugger
    return new Promise(function (resolve, reject) {
      const options = {
        method,
        body:JSON.stringify(payload)
      };
      fetch(url, options)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.error?.statusCode === 401 || res.error?.status === 401) {
              console.log(res.error)
          } else {
            callback(res);
            resolve(res);
          }
        })
        .catch((err) => {
          callback(err);
          return err;
        });
    });
  }
  