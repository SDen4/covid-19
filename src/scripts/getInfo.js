const url = 'https://api.covid19api.com/country/russia/status/';
let illness = [], deaths = [], recovers = [], dates = [], nowIll = [];

//get information about ills, deaths and recovers
async function getData(form) {
    let response = await fetch(url+form);
    if (response.ok) {
        let json = await response.json();
        let arr = []; // new array of data

        //create new arrays of data
        json.map(res => {
            let dayValue = res.Cases;
            arr.push(dayValue);
        })
        return arr;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    };
};

//get dates
async function getArrayOfDates() {
    let response = await fetch(url+'deaths');
    if (response.ok) {
        let json = await response.json();
        let arr = []; // new array of data

        //create new array of dates
        json.map(res => {
            let dayValue = res.Date;
            arr.push(dayValue.slice(0, 10));
        });
        return arr;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    };
};

//run getting all the data & calculate nowill
async function pr() {
    dates = await getArrayOfDates();
    console.log(dates);
    illness = await getData('confirmed');
    console.log(illness);
    deaths  = await getData('deaths');
    console.log(deaths);
    recovers = await getData('recovered');
    console.log(recovers);

    //calculate the nowill quantity
    for (let i = 0; i < illness.length; i++) {
        nowIll.push(illness[i] - deaths[i] - recovers[i]);
    };
    console.log(nowIll);
};
pr();

export {illness, deaths, recovers, nowIll, dates};