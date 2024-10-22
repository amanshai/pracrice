// 1. Create two promises, one that resolves and one that rejects after different intervals. 
// Use Promise.allSettled to log both the resolution and rejection.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 1 resolved'), 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 2 rejected'), 1000);
// });

// Promise.allSettled([promise1, promise2]).then((results) => {
//     results.forEach((result) => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise ${result.reason} resolved.`);
//       } else {
//         console.log(`Promise ${result.reason} rejected.`);
//       }
//     });
//   });



// //   2. Write three promises where one resolves and two reject. Use Promise.allSettled
// //    to log the outcome of all three promises.

// const promise1 = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('Promise 1 resolved'), 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//       setTimeout(() => reject('Promise 2 rejected'), 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//       setTimeout(() => reject('Promise 3 rejected'), 3000);
//     });

//     Promise.allSettled([promise1, promise2, promise3]).then((results) => {
//             results.forEach((result) => {
//               if (result.status === 'fulfilled') {
//                 console.log(`Promise ${result.reason} resolved.`);
//               } else {
//                 console.log(`Promise ${result.reason} rejected.`);
//               }
//             });
//           });




        


// 3. Create four promises that each resolve with different values.
//  Use Promise.allSettled to log the results in an array showing each promise's status.

// const promise1 = new Promise((resolve) => {
//       setTimeout(() => resolve('Promise 1 resolved with value A'), 2000);
//     });
    
//     const promise2 = new Promise((resolve) => {
//       setTimeout(() => resolve('Promise 2 resolved with value B'), 1000);
//     });
    
//     const promise3 = new Promise((resolve) => {
//       setTimeout(() => resolve('Promise 3 resolved with value C'), 3000);
//     });
    
//     const promise4 = new Promise((resolve) => {
//       setTimeout(() => resolve('Promise 4 resolved with value D'), 4000);
//     });
    
//     Promise.allSettled([promise1, promise2, promise3, promise4]).then((results) => {
//         console.log(results);
//         .catch((error) => {
//             console.log(error);
//         });
  
//     })



    
    
    
 



