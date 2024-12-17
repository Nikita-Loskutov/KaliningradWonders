const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Функция для обновления слайдов с плавным эффектом
function changeSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active'); // Показывает активный слайд
        } else {
            slide.classList.remove('active'); // Скрывает остальные слайды
        }
    });
}

// Функция для перехода к следующему слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Переход к следующему слайду
    changeSlide();
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Переход к предыдущему слайду
    changeSlide();
}

// Назначаем обработчики событий для кнопок
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Инициализация слайдера
changeSlide();
