// main.js

// Function to get existing users from localStorage
const getExistingUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
};

// Function to show the login popup
const showLoginPopup = () => {
    document.getElementById('loginPopup').style.display = 'flex';
};

// Function to hide the login popup
const hideLoginPopup = () => {
    document.getElementById('loginPopup').style.display = 'none';
};

// Event listener for showing login popup when "Login" button is clicked
document.getElementById('loginBtn').addEventListener('click', showLoginPopup);

// Event listener for showing login popup when footer "Login" button is clicked
document.getElementById('dif_btn').addEventListener('click', showLoginPopup);

// Scroll to signup section when "Signup" button is clicked
document.getElementById('signupBtn').addEventListener('click', () => {
    const signupSection = document.getElementById('login');
    if (signupSection) {
        signupSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Event listener for footer register button
const registerButton = document.querySelector('footer .btn button');
if (registerButton) {
    registerButton.addEventListener('click', () => {
        const signupSection = document.getElementById('login');
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Event listener for hiding the login popup when "X" button is clicked
document.getElementById('closePopup').addEventListener('click', hideLoginPopup);

// Hide login popup if user clicks outside the popup area
window.addEventListener('click', (event) => {
    const popup = document.getElementById('loginPopup');
    if (event.target === popup) {
        hideLoginPopup();
    }
});

// Check if user data already exists in localStorage and if user is logged in
window.addEventListener('DOMContentLoaded', () => {
    const existingUsers = getExistingUsers(); // Use the utility function
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (existingUsers.length > 0 && isLoggedIn) {
        const user = existingUsers[0]; // Modify this logic to get the correct logged-in user
        showUserInNavbar(user.firstName);
        hideRegistrationSection();
    }
});

