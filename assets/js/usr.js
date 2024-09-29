// Show 2FA form
function show2FA() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('2faForm').style.display = 'block';
}

// Hide 2FA form
function hide2FA() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('2faForm').style.display = 'none';
}

// Initial login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'nugra21@admin.co.id' && password === '12345') {
        show2FA(); // Show 2FA form
    } else {
        errorMessage.textContent = 'Username atau password salah.';
    }
});

// 2FA form submission
document.getElementById('2faForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('2faCode').value;
    const errorMessage = document.getElementById('errorMessage');

    if (code === '081328') {
        window.location.href = 'back up/devlopmen.html'; // Redirect to dashboard after 2FA success
    } else {
        errorMessage.textContent = 'Kode verifikasi salah.';
    }
});

// Chat functionality
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'none' || chatPopup.style.display === '' ? 'block' : 'none';
}



// Function to clear chat messages
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = ''; // Clear all chat messages
}

// Prevent right-click and other actions
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.key === 'u')) {
        event.preventDefault();
    }
});
document.addEventListener('keydown', function(event) {
    // Mencegah Ctrl + Shift + I
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
    // Mencegah Ctrl + Shift + C
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
    }
    // Mencegah F12
    if (event.key === 'F12') {
        event.preventDefault();
    }
});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

document.addEventListener('copy', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
    }
});
