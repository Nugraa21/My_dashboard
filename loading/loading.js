    // Tunggu sampai gambar dimuat
    const imgCoverLogo = document.querySelector('.img-cover-logo');
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