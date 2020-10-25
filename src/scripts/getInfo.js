const url = 'https://api.covid19api.com/total/country/russia/status/';
// ...{.Date} - get dates
// ...{.Cases} - info of ills, deaths and recovers quantities
// .../deaths - info about daeths quantity
// .../confirmed - info about ill quantity
// .../recovered - info about recovers quantity

let illness = [], deaths = [], recovers = [], dates = [], nowIll = [];

//get information about ills, deaths, recovers and separating dates array
async function getData(typeOfData, getDates) {
    let response = await fetch(url+typeOfData);
    if (response.ok) {
        let json = await response.json();
        let arr = [];//new array of data

        //create new arrays of data
        json.map(res => {
            //get dates
            if(getDates === 'Date') {
                let dayValue = res.Date;
                arr.push(dayValue.slice(0, 10));
            }
            //get ills, deaths, recovers
            else {
                let dayValue = res.Cases;
                arr.push(dayValue);
            };
        })
        return arr;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    };
};

//run getting all the data & calculate nowill
async function proceed() {
    dates = await getData('deaths', 'Date');
    illness = await getData('confirmed');
    deaths  = await getData('deaths');
    recovers = await getData('recovered')

    //calculate the nowill quantity
    for (let i = 0; i < illness.length; i++) {
        nowIll.push(illness[i] - deaths[i] - recovers[i]);
    };
};
proceed()

export {illness, deaths, recovers, nowIll, dates};