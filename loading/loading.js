// Tunggu sampai semua gambar dengan kelas yang ditentukan dimuat
const imgCoverLogos = document.querySelectorAll('.img-cover-logo ,img-holder');

imgCoverLogos.forEach((imgCoverLogo) => {
    imgCoverLogo.onload = function() {
        setTimeout(function() {
            document.getElementById('loader-container').style.display = 'none';
            // document.getElementById('content').style.display = 'block';
        }, 1000);
    };

    // Jika gambar sudah dalam cache, panggil fungsi langsung
    if (imgCoverLogo.complete) {
        imgCoverLogo.onload();
    }
});
