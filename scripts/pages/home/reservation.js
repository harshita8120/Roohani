// Reserve drawer — mobile only
const reserveImg = document.getElementById('reserve-img');
const reserveOverlay = document.getElementById('reserve-overlay');
const drawerClose = document.getElementById('drawer-close');

if (reserveImg) {
    reserveImg.addEventListener('click', () => {
        reserveOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';  /* prevent page scroll behind overlay */
    });
}

if (drawerClose) {
    drawerClose.addEventListener('click', () => {
        reserveOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
}

/* tap outside drawer closes it */
if (reserveOverlay) {
    reserveOverlay.addEventListener('click', (e) => {
        if (e.target === reserveOverlay) {
            reserveOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}