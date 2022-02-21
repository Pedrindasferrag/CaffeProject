//Nav normal

let show = true;

const navHeader = document.querySelector('.header__nav');
const navToggle = navHeader.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial';

    navHeader.classList.toggle('on', show);
    show =!show;
})