window.addEventListener('scroll', function () {
    const parallax = document.querySelectorAll('.parallax-background');
    for (let layer of parallax) {
        let scrollPosition = window.pageYOffset;
        layer.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
});