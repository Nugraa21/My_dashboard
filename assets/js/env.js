// Cek apakah sedang di production (GitHub Pages) atau local development
var isProduction = window.location.hostname === "nugra.online";

if (isProduction) {
    console.log("Production Mode: Sedang berjalan di GitHub Pages ( by .Nugra21 )");
} else {
    console.log("Development Mode: Sedang berjalan di localhost atau lingkungan development.");
}

// ======================

// Tampilkan pesan di console
console.log("**********************************");
console.log("*                                *");
console.log("*      Hai bro, apa kabar?       *");
console.log("*                                *");
console.log("**********************************");

console.log("\n");

console.log("Jika kalian bisa masuk ke bagian ini,");
console.log("silakan screenshot lalu kirim ke IG aku.");
console.log("Info lebih lanjut ada di websitenya:");
console.log("https://nugra.online");

// Menangkap gambar atau elemen media yang dimuat
document.addEventListener("DOMContentLoaded", function () {
    const lazyMedia = document.querySelectorAll("img[loading='lazy'], video[loading='lazy']");

    lazyMedia.forEach(media => {
        media.addEventListener("load", function () {
            console.log(`Media dengan src ${this.src} telah dimuat.`);
        });

        media.addEventListener("error", function () {
            console.error(`Media dengan src ${this.src} gagal dimuat.`);
        });
    });

    // Menangani bagian lain dari halaman yang dimuat
    window.addEventListener('load', function () {
        console.log('Halaman telah sepenuhnya dimuat.');
    });
});
