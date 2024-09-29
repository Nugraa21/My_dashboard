        // Fungsi untuk mendeteksi apakah elemen ada di viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Fungsi untuk memulai ulang animasi
        function restartAnimation(element) {
            element.style.animation = 'none';  // Matikan animasi sementara
            element.offsetHeight;               // Trik untuk memaksa browser menerapkan perubahan
            element.style.animation = '';       // Nyalakan kembali animasi
        }

        // Mengambil semua elemen dengan kelas 'typing-text'
        const typingTexts = document.querySelectorAll('.typing-text');

        // Event listener saat halaman discroll
        window.addEventListener('scroll', function() {
            typingTexts.forEach(function(text) {
                if (isInViewport(text)) {
                    text.classList.add('active');  // Menambahkan kelas 'active' saat elemen muncul di layar
                    restartAnimation(text);         // Restart animasi
                } else {
                    text.classList.remove('active');  // Menghapus kelas 'active' saat elemen keluar dari layar
                }
            });
        });

        // Inisiasi untuk memeriksa jika ada elemen di viewport saat halaman dimuat
        window.addEventListener('load', function() {
            typingTexts.forEach(function(text) {
                if (isInViewport(text)) {
                    text.classList.add('active');
                }
            });
        });