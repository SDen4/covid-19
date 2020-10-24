// const url = 'https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true';
// const url = 'https://api.quarantine.country/api/v1/spots/year?region=russia';
// const url = 'https://api.apify.com/v2/datasets/5JO5GL1h8Qv1CnG0m/items?format=json';
// const url = 'https://api.covid19api.com/country/russia/status/confirmed';
// const url = 'https://api.covid19api.com/country/russia/status/recovered';
// const url = 'https://api.covid19api.com/country/russia/status/deaths';


const url = 'https://api.covid19api.com/country/russia/status/';
let illness = [], deaths = [], recovers = [], dates = [], nowIll = [];

// const ill = document.querySelector('#data__display_ill');
// const dead = document.querySelector('#data__display_dead');
// const recover = document.querySelector('#data__display_recover');

// const date = document.querySelector('#test1');


//temp get data grom api 
// ill.addEventListener('click', ()=>{
//     getData('confirmed');
// });
// dead.addEventListener('click', ()=>{
//     getData('deaths');
// });
// recover.addEventListener('click', ()=>{
//     getData('recovered');
// });

// date.addEventListener('click', ()=>{
//     getArrayOfDates();
// });


async function getData(form) {
    let response = await fetch(url+form);
    if (response.ok) {
        let json = await response.json();

        // console.log(json);

        let arr = []; // new array of data

        //create new arrays of data
        json.map(res => {
            let dayValue = res.Cases;
            arr.push(dayValue);
        })
        // console.log(arr);
        return arr;
    } else {
        console.log("Ошибка HTTP: " + response.status);
    };
};

async function getArrayOfDates() {
    let response = await fetch(url+'deaths');
    if (response.ok) {
        let json = await response.json();

        // console.log(json);

        let arr = []; // new array of data

        //create new arrays of data
        json.map(res => {
            let dayValue = res.Date;
            arr.push(dayValue.slice(0, 10));
        });

        // console.log(arr);
        return arr;
    } else {
        console.log("Ошибка HTTP: " + response.status);
    };
};

async function pr() {
    dates = await getArrayOfDates();
    console.log(dates);
    illness = await getData('confirmed');
    console.log(illness);
    deaths  = await getData('deaths');
    console.log(deaths);
    recovers = await getData('recovered');
    console.log(recovers);

    //nowill quantity
    for (let i = 0; i < illness.length; i++) {
        nowIll.push(illness[i] - deaths[i] - recovers[i]);
    };
    console.log(nowIll);
}

pr();

export {illness, deaths, recovers, nowIll, dates};

// let promise = new Promise(function(resolve, reject) {
//     // window.onload = () => {
//         dates = getArrayOfDates();
//         illness = getData('confirmed');
//         deaths  = getData('deaths');
//         recovers = getData('recovered');
//         console.log(dates);
//         console.log(illness);
//         console.log(deaths);
//         console.log(recovers);
//     // };
// }).then(() => {
//     for (let item in illness) {
//         if (illness[item] == 0 || illness[item] == "") break;
//         illnessClear.push(illness[item]);
//     };
//     console.log(illnessClear);
// }).then(() => {
//     for (let i = 0; i < illnessClear.length; i++) {
//         nowIll.push(illness[i] - deaths[i] - recovers[i]);
//     };
//     console.log(nowIll);
//     return {illness, deaths, recovers, illnessClear, nowIll, dates};
// })

// export {ill, death, recover};