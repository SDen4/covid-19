//scripts
import './scripts/getInfo';

setTimeout(()=>{
    import('./scripts/leftsection');
    import('./scripts/graph');
}, 1000);

// import './scripts/leftsection';
// import './scripts/graph';

import './scripts/curdate';
import './scripts/prognosis1';
import './scripts/prognosis2';
import './scripts/prognosis3';
import './scripts/prognosis4';
import './scripts/qrCode';

// //styles
import './styles/scss/main.scss';

// import {proceed} from './scripts/getInfo';



// import('./scripts/getInfo').then((getInfo) => {
//     console.log(getInfo);
//     import( './scripts/curdate');
//     import( './scripts/prognosis1');
//     import( './scripts/prognosis2');
//     import( './scripts/prognosis3');
//     import( './scripts/prognosis4');
//     import( './scripts/qrCode');
// }).then(() => {
//     proceed();
// }).then(() => {
//     import('./scripts/graph');
// }).then(() => {
//     import('./scripts/leftsection');
// });




// import {proceed} from './scripts/getInfo';
// import './scripts/getInfo';

// let myFirstPromise = new Promise((resolve, reject) => {
//     proceed();
// });

// myFirstPromise.then(()=>{
//     console.log('success!')
//     import ('./scripts/leftsection');
//     import ('./scripts/graph');
// });

// async function load() {
//     console.log('test function!')
//     let test = await import('./scripts/getInfo');
//     test.proceed();
// };
// load().then(()=>{
//     console.log('success!')
//     import ('./scripts/leftsection');
//     import ('./scripts/graph');
// })

// import './scripts/curdate';
// import './scripts/prognosis1';
// import './scripts/prognosis2';
// import './scripts/prognosis3';
// import './scripts/prognosis4';
// import './scripts/qrCode';

// import './scripts/getInfo';
// import './scripts/curdate';
// import './scripts/prognosis1';
// import './scripts/prognosis2';
// import './scripts/prognosis3';
// import './scripts/prognosis4';
// import './scripts/qrCode';
// import './styles/scss/main.scss';

// import'./scripts/leftsection';
// import'./scripts/graph';