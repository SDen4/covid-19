//scripts
import './scripts/getInfo';

setTimeout(()=>{
    import('./scripts/leftsection');
    import('./scripts/graph');
}, 1500);

import './scripts/curdate';
import './scripts/prognosis1';
import './scripts/prognosis2';
import './scripts/prognosis3';
import './scripts/prognosis4';
import './scripts/qrCode';


//styles
import './styles/scss/main.scss';


// let myFirstPromise = new Promise((resolve, reject) => {
//     import ('./scripts/getInfo');
// })

// myFirstPromise.then(()=>{
//     import ('./scripts/leftsection');
//     import ('./scripts/graph');
//     import ('./scripts/curdate');
//     import ('./scripts/prognosis1');
//     import ('./scripts/prognosis2');
//     import ('./scripts/prognosis3');
//     import ('./scripts/prognosis4');
//     import ('./scripts/qrCode');
// })