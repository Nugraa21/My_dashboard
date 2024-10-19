// Tunggu sampai gambar dimuat
const imgCoverLogo = document.querySelector('.img-cover-logo');

imgCoverLogo.onload = function() {
    setTimeout(function() {
        const loaderContainer = document.getElementById('loader-container');
        loaderContainer.classList.add('hide'); // Add the hide class for transition

        // Jika loader container masih ada di DOM, sembunyikan setelah transisi
        loaderContainer.addEventListener('transitionend', function() {
            loaderContainer.style.display = 'none'; // Hide the container after transition
            document.getElementById('content').style.display = 'block'; // Show the main content
        });
    }, 0); // Adjust this time as needed
};

// Jika gambar sudah dalam cache, panggil fungsi langsung
if (imgCoverLogo.complete) {
    imgCoverLogo.onload();
}
