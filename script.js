var button = document.getElementById('toggle-button');

var navbar = document.getElementById('list-nav');

button.addEventListener('click', () =>
    navbar.classList.toggle('active'));


window.onscroll = () => {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100);

    navbar.classList.remove('active');
}

