const qrCode = document.querySelector('#qr-code'),
      qrButton = document.querySelector('#qr-button');

//open modal window
qrButton.addEventListener('click', () => {
    qrCode.style.display = 'flex';
});

//close modal window by click on window
qrCode.addEventListener('click', () => {
    qrCode.style.display = 'none';
});

//close modal window by esc and enter buttons
window.addEventListener('keydown', (e) => {
    if(e.keyCode === 13 || e.keyCode === 27)
    qrCode.style.display = 'none';
});