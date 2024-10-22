// 1. Write a function that creates two promises, one that resolves with "A" after 1 second and one that resolves with
// "B" after 2 seconds. Use Promise.all to log both results..

//   const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('A'), 1000); 
// });

// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => reject('B'), 2000);
// });

// Promise.all([promiseA, promiseB])
// .then((results) => {console.log(results);
// })
// .catch((error) => {console.log(error);})



// 2. Create three promises that each resolve with different numbers (1, 2, 3) 
// after 1 second. Use Promise.all to sum the numbers and log the total.

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve(1), 1000);
//   });

//   const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve(2), 1000);
//   });

//   const promise3 = new Promise((resolve) => {
//     setTimeout(() => resolve(3), 1000);
//   });

//   Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     const sum = results.reduce((acc, curr) => acc + curr, 0);
//     console.log(sum);
  // })
  // .catch((error) => {console.log(error);})




  // 3. Create an array of promises that each resolve after different intervals.
  //  Use Promise.all to log all the resolved values once all promises have completed.

  // const promise1 = new Promise((resolve) => {
  //   setTimeout(() => resolve('BMW'), 2000);
  // });    

  // const promise2 = new Promise((resolve) => {
  //   setTimeout(() => resolve('LEXUS'), 1000);
  // });

  // const promise3 = new Promise((resolve) => {
  //   setTimeout(() => resolve('TOYOTA'), 3000);
  // });

  // const promises = [promise1, promise2, promise3];
  
  // Promise.all(promises)
  // .then((results) => {
  //   console.log(results);
  // })
  // .catch((error) => {console.log(error);})




  // 4. Write a function that makes three API calls using fetch() (mocked). 
  // Use Promise.all to wait for all the API responses, then log the response bodies.


  // const mockAPI = (url) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (url === 'https://api.example.com/1') {
  //         resolve({ data: 'API 1 Response' });
  //       } else if (url === 'https://api.example.com/2') {
  //         resolve({ data: 'API 2 Response' });
  //       } else if (url === 'https://api.example.com/3') {
  //         resolve({ data: 'API 3 Response' });
  //       } else {
  //         reject('Invalid URL');
  //       }
  //     }, 2000);
  //   });
  // };


  