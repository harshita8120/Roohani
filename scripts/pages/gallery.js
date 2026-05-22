const gallerySections = {
    chefstable: [
        { src: "videos/VIDEO_9bf5e7f7-bd50-4128-bba8-ad4eb873706f.mp4", alt: "Chef's Table 1" },
        { src: "videos/20241118123544_instagram_4.mp4", alt: "Chef's Table 2" },
        { src: "videos/VIDEO_5ceb799a-745a-4ccd-9c1e-82cef457cb87.mp4", alt: "Chef's Table 3" }
    ],
    captures: [
        { src: "videos/20241118123032_instagram_1.mp4", alt: "Capture 1" },
        { src: "videos/20241118123935_instagram_6.mp4", alt: "Capture 2" },
        { src: "videos/20241118124220_instagram_7.mp4", alt: "Capture 3" },
        { src: "videos/20241118124328_instagram_8.mp4", alt: "Capture 4" }
    ]
};

document.querySelectorAll('.carousel[data-section]').forEach(container => {
    const section = container.dataset.section;
    if (gallerySections[section]) {
        container.dataset.images = JSON.stringify(gallerySections[section]);
    }
});