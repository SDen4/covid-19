const test = document.querySelector('#all');
const url = 'https://api.quarantine.country/api/v1/summary/region?region=florida&sub_areas=1';

test.addEventListener('click', async() => {
    console.log('test button!')
    let response = await fetch(url);
    console.log(response);
});