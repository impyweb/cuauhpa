document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel-inner img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Inicial
    showImage(currentIndex);
    setInterval(nextImage, 10000); // cada 10 segundos
});
