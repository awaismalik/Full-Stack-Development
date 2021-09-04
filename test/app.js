
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    if (response !== 200) {
        throw new Error('can not fetch data');
    }
    const data = await response.json();

    return data;
};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err));


// New way fatch data

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved:', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected:', err);
// });


// Old way to fetch data from JSON files

// const getTodos = (resources, callback) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });
//         request.open('GET', resources);

//         request.send();
//     });
// }

// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolved', data);
//     return getTodos('todos/mario.json');
// }).then(data => {
//     console.log('Promise 2 resolve:', data);
//     return getTodos('todos/shaun.json');
// }).then(data => {
//     console.log('promise 3 resolve:', data);
// }).catch(err => {
//     console.log('promise rejected', err);
// })

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve('some data');
//         // reject('some error');
//     })
// }

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// getSomething().then((data) => {
//     console.log(data
//     );
// }, (err) => {
//     console.log(err);
// });



// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);

//         });
//     });
// });




// Date-Fns example

// const now = new Date();

// // console.log(dateFns.isToday(now));

// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// // compare

// const before = new Date('January 1 2021 12:00:00');

// console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));