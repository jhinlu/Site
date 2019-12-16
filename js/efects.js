// // ScrollReveal

window.sr = ScrollReveal();

ScrollReveal().reveal('.card-efect-1', {
    duration: 500,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

ScrollReveal().reveal('.card-efect-2', {
    duration: 700,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

ScrollReveal().reveal('.card-efect-3', {
    duration: 900,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

ScrollReveal().reveal('.img-efect-1', {
    duration: 1000,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

ScrollReveal().reveal('.img-efect-2', {
    duration: 1100,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

ScrollReveal().reveal('.img-efect-3', {
    duration: 1200,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

ScrollReveal().reveal('.img-efect-4', {
    duration: 1400,
    origin: 'bottom',
    reset: true,
    easing: 'ease-in',
    mobile: false,
    distance: '2%'
})

// SmoothScrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});