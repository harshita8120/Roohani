function buildCarousel(container, images) {
    let index = 0;

    function update() {
        const prev = (index - 1 + images.length) % images.length;
        const next = (index + 1) % images.length;

        const prevImg = container.querySelector('.c-prev img');
        const currImg = container.querySelector('.c-current img');
        const nextImg = container.querySelector('.c-next img');

        prevImg.src = images[prev].src;
        prevImg.alt = images[prev].alt;

        currImg.src = images[index].src;
        currImg.alt = images[index].alt;

        nextImg.src = images[next].src;
        nextImg.alt = images[next].alt;
    }

    container.innerHTML = `
        <div class="c-prev">
            <img class="dish side-slide" src="" alt="">
        </div>
        <button class="carousel-btn prev-btn">&#8592;</button>
        <div class="c-current">
            <img class="dish current-slide" src="" alt="">
        </div>
        <button class="carousel-btn next-btn">&#8594;</button>
        <div class="c-next">
            <img class="dish side-slide" src="" alt="">
        </div>
    `;

    container.querySelector('.prev-btn').addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        update();
    });

    container.querySelector('.next-btn').addEventListener('click', () => {
        index = (index + 1) % images.length;
        update();
    });

    update();
}

function initCarousels() {
    document.querySelectorAll('.carousel[data-images]').forEach(container => {
        const images = JSON.parse(container.dataset.images);
        buildCarousel(container, images);
    });
}

document.addEventListener('DOMContentLoaded', initCarousels);