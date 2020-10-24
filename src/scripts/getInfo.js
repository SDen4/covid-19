const url = 'https://api.covid19api.com/country/russia/status/';
let illness = [], deaths = [], recovers = [], dates = [], nowIll = [];

//get information about ills, deaths, recovers and separating dates array
async function getData(form, dates) {
    let response = await fetch(url+form);
    if (response.ok) {
        let json = await response.json();
        let arr = []; // new array of data

        //create new arrays of data
        json.map(res => {
            if(dates === 'dates') {
                let dayValue = res.Date;
                arr.push(dayValue.slice(0, 10));
            } else {
                let dayValue = res.Cases;
                arr.push(dayValue);
            }
        })
        return arr;
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    };
};

//run getting all the data & calculate nowill
async function pr() {
    // dates = await getArrayOfDates();
    dates = await getData('deaths', 'dates');
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