// auth.js

// Registration form submission handler
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // Validate all fields are filled in
    if (firstName && lastName && email && phoneNumber && password) {
        if (!email.endsWith('@gmail.com')) {
            document.getElementById('message').innerText = 'Email must be a Gmail address.';
            document.getElementById('message').style.color = 'red';
            return;
        }

        // Get existing users
        const existingUsers = getExistingUsers(); // Use the utility function

        // Check if the email already exists
        const userExists = existingUsers.some(user => user.email === email);
        if (userExists) {
            document.getElementById('message').innerText = 'This email is already registered.';
            document.getElementById('message').style.color = 'red';
            return;
        }

        const user = { firstName, lastName, email, phoneNumber, password };

        // Add new user to the array and save it to localStorage
        existingUsers.push(user);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        localStorage.setItem('loggedIn', 'true');

        // Display success message and update UI
        const message = document.getElementById('message');
        message.innerText = 'Registration successful!';
        message.style.color = 'green';

        hideRegistrationSection();
        showUserInNavbar(user.firstName);
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        document.getElementById('message').style.color = 'red';
    }
});

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get existing users from localStorage
    const existingUsers = getExistingUsers(); // Use the utility function

    console.log("Existing Users:", existingUsers);
    console.log("Email:", email);
    console.log("Password:", password);

    // Find the user with the provided email and password
    const storedUser = existingUsers.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);
    
    console.log("Stored User:", storedUser);

    if (storedUser) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('loginMessage').innerText = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';

        hideRegistrationSection();
        showUserInNavbar(storedUser.firstName);
        document.getElementById('loginPopup').style.display = 'none';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid email or password.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

