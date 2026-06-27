//Non-auto movement arrow slider - used in menu and gallery

function buildCarousel(container, items, renderItem) {
    let index = 0;

    // Initial render using renderItem
    container.innerHTML = `
        <div class="c-prev">
            ${renderItem(items.at(-1), 'side-slide')}
        </div>
        <button class="carousel-btn prev-btn">&#8592;</button>
        <div class="c-current">
            ${renderItem(items[0], 'current-slide')}
        </div>
        <button class="carousel-btn next-btn">&#8594;</button>
        <div class="c-next">
            ${renderItem(items[1] || items[0], 'side-slide')}
        </div>
    `;

    function update() {
        const prev = (index - 1 + items.length) % items.length;
        const next = (index + 1) % items.length;

        // Replace entire inner content of each slot
        // This works for both img and video since renderItem decides the tag
        container.querySelector('.c-prev').innerHTML = renderItem(items[prev], 'side-slide');
        container.querySelector('.c-current').innerHTML = renderItem(items[index], 'current-slide');
        container.querySelector('.c-next').innerHTML = renderItem(items[next], 'side-slide');
    }

    container.querySelector('.prev-btn').addEventListener('click', () => {
        index = (index - 1 + items.length) % items.length;
        update();
    });

    container.querySelector('.next-btn').addEventListener('click', () => {
        index = (index + 1) % items.length;
        update();
    });

    let touchStartX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 40) {   // minimum swipe distance
            if (diff > 0) {
                // swiped left → next
                index = (index + 1) % items.length;
            } else {
                // swiped right → prev
                index = (index - 1 + items.length) % items.length;
            }
            update();
        }
    });
}

function renderImage(item, sizeClass) {
    return `<img class="carousel-item ${sizeClass}" 
                 src="${item.src}" 
                 alt="${item.alt}">`;
}

function renderVideo(item, sizeClass) {
    return `<video class="carousel-item ${sizeClass}" 
                   src="${item.src}"
                   controls
                   preload="metadata">
                   muted
            </video>`;
} //preload is for video thumbnails

function initCarousels() {
    document.querySelectorAll('.carousel[data-images]').forEach(container => {
        const items = JSON.parse(container.dataset.images);
        const type = container.dataset.type || 'image';
        const renderer = type === 'video' ? renderVideo : renderImage;
        buildCarousel(container, items, renderer);
    });
}

document.addEventListener('DOMContentLoaded', initCarousels);