document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    let index = 0;

    slider.addEventListener('click', event => {
        if (event.target.classList.contains('prev')) {
            index = (index > 0) ? index - 1 : slides.children.length - 1;
        } else if (event.target.classList.contains('next')) {
            index = (index < slides.children.length - 1) ? index + 1 : 0;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    });
});
