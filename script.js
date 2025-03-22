function scrollGallery(direction) {
    document.getElementById('gallery').scrollBy({
        left: direction,
        behavior: 'smooth'
    });
}