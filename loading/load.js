window.onload = function() {
    const loader = document.getElementById('loader');
    const pageContent = document.getElementById('pageContent');
    
    // Sembunyikan loader dan tampilkan konten setelah halaman selesai dimuat
    loader.style.display = 'none';
    pageContent.style.display = 'block';
};