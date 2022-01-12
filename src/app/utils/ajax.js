/* eslint-disable no-unused-vars */
export function fetchCall(callback, url, method, payload) {
    return new Promise(function (resolve, reject) {
      const options = {
        method,
        body:JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json'
        }
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
  
  export function fetchLoginCall(callback, url, method, payload) {
    // debugger
    let token = sessionStorage.getItem('user-token');
      return new Promise(function (resolve, reject) {
        const options = {
          method,
          body:JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' [token]
          }
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