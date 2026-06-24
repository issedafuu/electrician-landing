    // Слайдер отзывов
    const track = document.querySelector('.reviews__track');
    const dots = document.querySelectorAll('.reviews__dot');
    const prevBtn = document.querySelector('.reviews__arrow-prev');
    const nextBtn = document.querySelector('.reviews__arrow-next');
    let currentSlide = 0;
    let autoSlideInterval;

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    function goToSlide(index) {
        if (index < 0) {
            currentSlide = dots.length - 1;
        } else if (index >= dots.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 10000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(currentSlide - 1);
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(currentSlide + 1);
        startAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            goToSlide(parseInt(dot.dataset.index));
            startAutoSlide();
        });
    });

    const sliderContainer = document.querySelector('.reviews__slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();