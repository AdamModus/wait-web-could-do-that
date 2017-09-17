const button = document.querySelector('button');
const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.backdrop');
const cards = document.querySelectorAll('.card');

button.addEventListener('click', toggleMenu);

backdrop.addEventListener('click', hideMenu);

function toggleMenu() {
    menu.classList.toggle('show');
    backdrop.classList.toggle('show');
}

function hideMenu() {
    menu.classList.remove('show');
    backdrop.classList.remove('show');
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Clicked on card');
    });
});