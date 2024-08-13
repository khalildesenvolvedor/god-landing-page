document.addEventListener('DOMContentLoaded', () => {
    // Configuração do carrossel
    const items = document.querySelectorAll('.list .item');
    const arrows = document.querySelectorAll('.arrows button');
    const indicators = document.querySelectorAll('.indicators li');
    const numberDisplay = document.querySelector('.indicators .number');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.transform = index === currentIndex ? 'translateX(0)' : 'translateX(100vw)';
            item.style.opacity = index === currentIndex ? '1' : '0';
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });

        numberDisplay.textContent = `${currentIndex + 1}`; // Corrigido para interpolação de string
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    arrows[0].addEventListener('click', prevSlide); // Botão de retroceder
    arrows[1].addEventListener('click', nextSlide); // Botão de avançar

    updateCarousel(); // Inicializa o carrossel

    // Configuração do menu hamburguer
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
});
