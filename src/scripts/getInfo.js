// const url = 'https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true';
// const url = 'https://api.quarantine.country/api/v1/spots/year?region=russia';
// const url = 'https://api.apify.com/v2/datasets/5JO5GL1h8Qv1CnG0m/items?format=json';
// const url = 'https://api.covid19api.com/country/russia/status/confirmed';
// const url = 'https://api.covid19api.com/country/russia/status/recovered';
// const url = 'https://api.covid19api.com/country/russia/status/deaths';

const url = 'https://api.covid19api.com/country/russia/status/';

const ill = document.querySelector('#data__display_ill');
const dead = document.querySelector('#data__display_dead');
const recover = document.querySelector('#data__display_recover');


//temp get data grom api 
ill.addEventListener('click', ()=>{
    getData('confirmed');
})
dead.addEventListener('click', ()=>{
    getData('deaths');
})
recover.addEventListener('click', ()=>{
    getData('recovered');
})


async function getData(type) {
    let response = await fetch(url+type);
    if (response.ok) {
        let json = await response.json();

        console.log(json);

        let arr = []; // new array of data

        //create new arrays of data
        json.map(res => {
            let dayValue = res.Cases;
            arr.push(dayValue);
        })

        console.log(arr);
    } else {
        console.log("Ошибка HTTP: " + response.status);
    };
};