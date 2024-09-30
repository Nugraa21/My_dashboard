// Tampilkan environment yang sedang digunakan di console
// console.log("Production Mode: Sedang berjalan di GitHub Pages");

// Kamu bisa menambahkan logic lain di sini jika ada perbedaan antara development dan production

// ======================

// Tampilkan environment yang sedang digunakan di console
console.log("Production Mode: Sedang berjalan di GitHub Pages ( by .Nugra21 )");

// Fungsi untuk mengganti warna latar belakang secara acak
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Menambahkan tombol untuk mengganti warna latar belakang
var button = document.createElement('button');
button.innerText = "Ganti Warna Latar Belakang";
button.onclick = function() {
    changeBackgroundColor('#' + Math.floor(Math.random() * 16777215).toString(16)); // Warna acak
};
document.body.appendChild(button);

// Fungsi untuk menampilkan waktu saat ini
function displayCurrentTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    var timeElement = document.createElement('p');
    timeElement.innerText = "Waktu saat ini: " + timeString;
    document.body.appendChild(timeElement);
}

// Panggil fungsi untuk menampilkan waktu saat ini
displayCurrentTime();

// Contoh request API menggunakan fetch
// var apiUrl = 'https://api.example.com/data'; // Ganti dengan URL API kamu

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         var dataElement = document.createElement('pre');
//         dataElement.innerText = JSON.stringify(data, null, 2);
//         document.body.appendChild(dataElement);
//     })
//     .catch(error => {
//         console.error('Error saat mengambil data dari API:', error);
//     });
console.log("Syber scurity : active");function changeBackgroundColor(o){document.body.style.backgroundColor=o}var button=document.createElement("button");button.innerText="Ganti Warna Latar Belakang",button.onclick=function(){changeBackgroundColor("#"+Math.floor(16777215*Math.random()).toString(16))},document.body.appendChild(button);function displayCurrentTime(){var o=new Date,t=o.toLocaleTimeString(),n=document.createElement("p");n.innerText="Waktu saat ini: "+t,document.body.appendChild(n)}displayCurrentTime();
console.log("- Hai bro apa kabar -");
console.log("- Kalau kalian bisamasuk ke bagian ini bisa ss lalu kirim ke ig aku ada di web aku untuk ignya -");

console.log("");

// Untuk menangkap ketika gambar atau elemen media lain dimuat
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
    
    // Bisa juga menangani bagian lain dari halaman yang dimuat
    window.addEventListener('load', function () {
        console.log('Halaman telah sepenuhnya dimuat.');
    });
});
