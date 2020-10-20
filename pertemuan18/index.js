/*
    Asynchronous JavaScript
    20 Oktober 2020
*/

// const second = () => {
//     setTimeout(() => {
//         console.log('Second');
//     }, 2000);
// }

// Make 3 async (Jeda 2 Detik)
// const second = () => {
//     setTimeout(() => {
//         console.log('Async 1');
//         setTimeout(() => {
//             console.log('Async 2');
//             setTimeout(() => {
//                 console.log('Async 3');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// const first = () => {
//     console.log('First');
//     second();
//     console.log('The End');
// }

// first(); // Run Function

// PROMISE
const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if(error){
            reject();
        }
        else{
            resolve();
        }
    }, 2000);
})
getData
    .then(() => console.log('Success'))
    .catch(() => console.log('Error'))