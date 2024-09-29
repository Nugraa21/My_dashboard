document.getElementById('chatInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendChat();
    }
});

function sendChat() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const userMessage = chatInput.value;

    if (userMessage) {
        // Clear chat functionality
        if (userMessage.trim().toLowerCase() === '/clear') {
            chatMessages.innerHTML = ''; // Clear all messages
            chatInput.value = ''; // Clear input field
            return; // Exit the function
        }

        // Redirect to another webpage for "/masuk"
        if (userMessage.trim().toLowerCase() === '/masuk') {
            window.location.href = '../index.html'; // Replace with the desired URL
            return; // Exit the function
        }

        // Show login options for "/login"
        if (userMessage.trim().toLowerCase() === '/login') {
            const optionsResponse = `
                Silakan pilih:<br>
                <button onclick="window.location.href='https://www.example.com/masuk'">Masuk</button><br>
                <button onclick="window.location.href='https://www.example.com/buat-akun'">Buat Akun</button>
            `;
            sendBotResponse(optionsResponse);
            chatInput.value = ''; // Clear input field
            return; // Exit the function
        }

        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.textContent = `${userMessage} <<`;
        chatMessages.appendChild(userDiv);

        let response = '';
        const lowerCaseMessage = userMessage.toLowerCase();

        // Pertanyaan tentang kode akses n21
        if (lowerCaseMessage.includes('/n21')) {
            response = 'Username: nugra21@admin.co.id\nPassword: 12345\nOTP: 081328';
        }
        // Pertanyaan tentang identitas bot atau bantuan
        else if (lowerCaseMessage.includes('/help')) {
            response = 
            'Maaf system saat ini sedang di perbaiki';
        } 
        else if (lowerCaseMessage.includes('/nugra')) {
            response = 
            'Hai nugra selamat datang..!<nr>ada hal yang bisa saya bantu ';
        } 
        else if (lowerCaseMessage.includes('/info')) {
            response = 
            '---------------- <br>[ /nama ]<br>[ /help ]<br>[ /pasword ] <br>----------------';
        } 
        // Salam
        else if (lowerCaseMessage.includes('hai') 
            || lowerCaseMessage.includes('hallo')
            || lowerCaseMessage.includes('hi')
            || lowerCaseMessage.includes('halo')
            || lowerCaseMessage.includes('hey')
            || lowerCaseMessage.includes('yow')
            || lowerCaseMessage.includes('selamat pagi')
            || lowerCaseMessage.includes('selamat siang')
            || lowerCaseMessage.includes('selamat sore')
            || lowerCaseMessage.includes('selamat malam')
            ) 
        {
            response = 'Hai, ada yang bisa saya bantu?';
        }
        // Pertanyaan tentang identitas bot
        else if (lowerCaseMessage.includes('kamu siapa') 
            || lowerCaseMessage.includes('siapa kamu')
            || lowerCaseMessage.includes('kamu ini apa')
            || lowerCaseMessage.includes('apa ini')
            || lowerCaseMessage.includes('apa bot ini')
            || lowerCaseMessage.includes('siapa ini')
            ) 
        {
            response = 'Saya adalah bot yang akan membantu saat ada kendala.';
        }
        // Menanyakan kabar
        else if (lowerCaseMessage.includes('apa kabar') 
            || lowerCaseMessage.includes('gimana kabarmu')
            || lowerCaseMessage.includes('bagaimana kabar kamu')
            || lowerCaseMessage.includes('gimana kamu')
            || lowerCaseMessage.includes('kamu baik')
            ) 
        {
            response = 'Saya baik-baik saja, terima kasih. Bagaimana dengan kamu?';
        }
        // Menanyakan cara mengubah password atau user
        else if (lowerCaseMessage.includes('/pasword') 
            || lowerCaseMessage.includes('ubah password')
            || lowerCaseMessage.includes('lihat password')
            ) 
        {
            response = 'Untuk mengganti pasword atau username kalian bisa menghubungi admin';
        }
        else if (lowerCaseMessage.includes('lihat user') 
            || lowerCaseMessage.includes('siapa user saya')
            ) 
        {
            response = 'Untuk mengetahui akun anda, ketik /user.';
        }
        // Pertanyaan waktu dan tanggal
        else if (lowerCaseMessage.includes('sekarang jam berapa') 
            || lowerCaseMessage.includes('waktu sekarang')
            || lowerCaseMessage.includes('jam berapa ini')
            || lowerCaseMessage.includes('apa sekarang')
            || lowerCaseMessage.includes('tanggal berapa sekarang')
            || lowerCaseMessage.includes('hari apa ini')
            ) 
        {
            const now = new Date();
            const time = now.toLocaleTimeString();
            const date = now.toLocaleDateString();
            response = `Sekarang jam ${time}, tanggal ${date}.`;
        }
        // Menanyakan cuaca
        else if (lowerCaseMessage.includes('cuaca bagaimana') 
            || lowerCaseMessage.includes('cuaca hari ini')
            || lowerCaseMessage.includes('cuaca')
            ) 
        {
            response = 'Untuk mengetahui cuaca, silakan cek aplikasi cuaca lokal atau ketik "cuaca di kota" untuk informasi spesifik.';
        }
        // Pertanyaan umum lainnya
        else if (lowerCaseMessage.includes('terima kasih') 
            || lowerCaseMessage.includes('makasih')
            || lowerCaseMessage.includes('thanks')
            || lowerCaseMessage.includes('thank you')
            || lowerCaseMessage.includes('thank')
            ) 
        {
            response = 'Sama-sama! Senang bisa membantu.';
        }
        else if (lowerCaseMessage.includes('bagaimana cara menggunakan ini') 
            || lowerCaseMessage.includes('cara pakai')
            || lowerCaseMessage.includes('bagaimana cara')
            || lowerCaseMessage.includes('tutorial ini')
            ) 
        {
            response = 'Silakan ikuti petunjuk di halaman utama atau ketik "/help" untuk bantuan lebih lanjut.';
        }
        // Jika bot tidak mengerti pertanyaan
        else {
            response = 'Masukan nama mu dengan<br>  [ /nama ]<br><br><br>[ /info ]  : Untuk melihat informasi';
        }

        sendBotResponse(response);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function sendBotResponse(response) {
    const chatMessages = document.getElementById('chatMessages');
    const botDiv = document.createElement('div');
    botDiv.className = 'bot';

    // Tambahkan foto profil untuk bot
    const botProfile = document.createElement('img');
    botProfile.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibjMPfwhpEsRM0Xs4IBtdZ-F0nq9tKj9gU7sD2DLhnPf1S-oNO-lS8ZZCI-_1VkypAOc7Ukj3rT5NEK7_Gezv0gdCjP8-5N8IzTEeftlloXPECY_LgQMG3FC15izSDY2RfB7j-wQkgHomxPl7RVYfoB9NfgTWmX5HBfY2-51g0WK-_ed4jrGOlX6m7bOQ/s320/icon.png';  // Ganti dengan link ke gambar profil bot
    botProfile.alt = 'Bot Profile';
    botProfile.className = 'bot-profile';

    botDiv.appendChild(botProfile);

    const botText = document.createElement('span');
    botText.innerHTML = `${response.replace(/\n/g, '<br>')}`;
    botDiv.appendChild(botText);

    chatMessages.appendChild(botDiv);
}
