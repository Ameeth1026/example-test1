// navbar.js

// Hide registration and login sections in navbar and footer
function hideRegistrationSection() {
    // Hide navbar login and registration sections
    document.getElementById('login').style.display = 'none';
    document.getElementById('loginPopup').style.display = 'none';

    // Hide the entire footer button container for register and login buttons
    const footerBtnContainer = document.querySelector('footer .btn');
    if (footerBtnContainer) {
        footerBtnContainer.style.display = 'none';
    }
}

// Display user's name in navbar and add logout functionality
function showUserInNavbar(userName) {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    if (loginBtn && signupBtn) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
    }

    const navbar = document.getElementById('nav_btn');
    if (navbar) {
        const userGreeting = document.createElement('button');
        userGreeting.innerHTML = `<i class="fas fa-right-from-bracket"></i> ${userName}`;
        userGreeting.classList.add('navbar-btn');

        userGreeting.addEventListener('click', () => {
            localStorage.setItem('loggedIn', 'false');
            location.reload();
        });

        navbar.appendChild(userGreeting);
    }
}
