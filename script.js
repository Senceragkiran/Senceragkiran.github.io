const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');

if (btn) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
        btn.setAttribute(
            'aria-expanded',
            menu.classList.contains('open')
        );
    });
}

document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});

const lightbox = document.querySelector('.lightbox');

if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('open');
        });
    });

    lightbox.addEventListener('click', e => {
        if (
            e.target === lightbox ||
            e.target.classList.contains('close')
        ) {
            lightbox.classList.remove('open');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('open');
        }
    });
}
