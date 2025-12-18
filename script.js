
// Параллакс эффект для header
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('header');
    parallax.style.transform = 'translateY(' + window.scrollY * 0.5 + 'px)';
});

// Тема темного/светлого режима
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('.cta-button').addEventListener('click', toggleTheme);
    