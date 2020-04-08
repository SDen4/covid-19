window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');


    function recursy(element) {
        element.childNodes.forEach(node => {
            console.log(node);
            if(element.childNodes.length > 1) {
                recursy(node);
            };
        })
    };
    recursy(body);
});