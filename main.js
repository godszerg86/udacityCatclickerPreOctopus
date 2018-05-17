// document.addEventListener('DOMContentLoaded', ()=> {
//     let count = 0;

//    document.querySelector('#img-one').addEventListener('click', (function(count) {

//         const catOneName = 'Charlie';
//         return function () {
//             count++;
//             document.querySelector('#first-cat').innerText = `${catOneName}: ${count}`;
//         }
//    })(count));
//    document.querySelector('#img-two').addEventListener('click', (function(count) {
//     const catTwoName = 'Winston'

//     return function () {
//         count++;
//         document.querySelector('#second-cat').innerText = `${catTwoName}: ${count}`;
//     }
// })(count));


document.addEventListener('DOMContentLoaded', () => {
let count = 0;
    const cats = {
        count:0,
        winston: ((count) => {
            return () => {
                count++;
                return count;
            }
        })(count),
        rick: ((count) => {
            return () => {
                count++;
                return count;
            }
        })(count),
        morty: ((count) => {
            return () => {
                count++;
                return count;
            }
        })(count),
        moon: ((count) => {
            return () => {
                count++;
                return count;
            }
        })(count),
        shawerman: ((count) => {
            return () => {
                count++;
                return count;
            }
        })(count),
    }
   
    document.querySelector('ol').addEventListener('click', function (event) {
        document.querySelector('h3').innerText = `${event.target.innerText}: ${cats[event.target.innerText.toLowerCase()]()}`;
        document.querySelector('img').setAttribute('src', `img/${event.target.innerText}.jpg`);


    });
});

