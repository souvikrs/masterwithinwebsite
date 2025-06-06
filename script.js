document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Homepage News Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let currentItem = 0;
        const totalItems = carouselItems.length;

        function showNextItem() {
            carouselItems[currentItem].classList.remove('active');
            currentItem = (currentItem + 1) % totalItems;
            carouselItems[currentItem].classList.add('active');
        }

        // Auto-rotate every 5 seconds
        let carouselInterval = setInterval(showNextItem, 5000);

        // Pause on hover
        const carousel = document.querySelector('.news-carousel');
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(showNextItem, 5000);
        });
    }

    // [FUTURE USE] FAQ Accordion - Add this when you build the Contact/FAQ page
    // const faqItems = document.querySelectorAll('.faq-item-header');
    // faqItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         const content = item.nextElementSibling;
    //         item.classList.toggle('active');
    //         if (content.style.maxHeight) {
    //             content.style.maxHeight = null;
    //         } else {
    //             content.style.maxHeight = content.scrollHeight + "px";
    _//         }
    //     });
    // });
});