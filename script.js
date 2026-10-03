// ========================================
// SENCER AĞKIRAN — SITE JAVASCRIPT
// ========================================

// HAMBURGER MENÜ
const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("open");

        const isOpen = mobileMenu.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });

    // Menüden bir sayfaya tıklanınca menüyü kapat
    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}


// ========================================
// MEDYA GALERİSİ
// ========================================

const lightbox = document.querySelector(".lightbox");

if (lightbox) {

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".close");

    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("open");

            document.body.style.overflow = "hidden";
        });

    });


    // Kapatma butonu
    if (closeButton) {

        closeButton.addEventListener("click", function () {

            lightbox.classList.remove("open");

            document.body.style.overflow = "";
        });

    }


    // Arka plana tıklayınca kapat
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("open");

            document.body.style.overflow = "";
        }

    });


    // ESC tuşuyla kapat
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            lightbox.classList.remove("open");

            document.body.style.overflow = "";
        }

    });

}


// ========================================
// SAYFA AÇILIRKEN MENÜYÜ KAPALI TUT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    if (mobileMenu) {
        mobileMenu.classList.remove("open");
    }

    if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
    }

});
