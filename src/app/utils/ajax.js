/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
export function fetchCall(callback, url, method, payload) {
  // debugger
    return new Promise(function (resolve, reject) {
      const options = {
        method,
        body:JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
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
  
//   export function getImage(callback, url, method, payload) {
//     debugger;
//     return new Promise(function (resolve, reject)
//     {
//       const options = {
//         method, 
//         body:JSON.stringify(payload),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//       }
//       fetch(url, options).then((response)=>{
//         console.log(response)
//         response.json();
//       }).then((res)=>{
//         console.log(res)
//       //   const imageObjectURL = URL.createObjectURL(imageBlob);
//       // console.log(imageObjectURL);
//       }).then((res)=>{
//         res.json();
//         console.log(res);
//       }).then((res)=>{
//         callback(res);
//         console.log(res)
//         resolve(res);
//       }).catch((err)=>{
//         callback(err);
//         return err;
//       })

//     })
// }   
