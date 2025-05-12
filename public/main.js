const numberOfPetals = 30; // Tu peux augmenter ce nombre

for (let i = 0; i < numberOfPetals; i++) {
    const petal = document.createElement('img');
    petal.src = '/assets/petal.png';
    petal.classList.add('petal');

    petal.style.left = Math.random() * 100 + 'vw';

    const size = 20 + Math.random() * 30;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    const duration = 5 + Math.random() * 10;
    petal.style.animationDuration = duration + 's';

    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    petal.style.animationIterationCount = 'infinite';

    petal.style.animationDelay = Math.random() * 5 + 's';

    document.body.appendChild(petal);
}

var isOpen = false;

$('.envelope').on('click', (e) => {
    if (isOpen) {
        $('.envelope').attr('src', '/assets/envelope-closed.png');

        isOpen = false;
    } else {
        isOpen = true;
        $('.envelope').attr('src', '/assets/envelope-open.png');
        setTimeout(() => {
            $('.letter-container').removeClass('hidden');

        }, 500);

    }
});

$('.letter-container').on('click', (e) => {
    if (e.target === e.currentTarget) {
        $('.letter-container').addClass('hidden');
        setTimeout(() => {
            $('.envelope').attr('src', '/assets/envelope-closed.png');
            isOpen = false;
        }, 200);
    }
});
