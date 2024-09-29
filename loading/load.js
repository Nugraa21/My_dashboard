window.onload = function() {
    const loader = document.getElementById('loader');
    const pageContent = document.getElementById('pageContent');
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    images.forEach((img) => {
        if (img.complete) {
            incrementLoadedImages();
        } else {
            img.onload = incrementLoadedImages;
            img.onerror = incrementLoadedImages;
        }
    });

    function incrementLoadedImages() {
        loadedImages++;
        if (loadedImages === images.length) {
            loader.style.display = 'none'; // Sembunyikan loader
            pageContent.style.display = 'block'; // Tampilkan konten setelah semua gambar dimuat
        }
    }
};