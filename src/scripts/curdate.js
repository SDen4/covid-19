const curDate = document.querySelector('.data__day');

let now = new Date().toLocaleString("ru", {day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'});
curDate.textContent = `Сегодня: ${now}`;