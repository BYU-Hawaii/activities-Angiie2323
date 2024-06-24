document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username);
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email);
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);

    var usernameFeedback = document.getElementById('usernameFeedback');
    var emailFeedback = document.getElementById('emailFeedback');
    var passwordFeedback = document.getElementById('passwordFeedback');
    var phoneFeedback = document.getElementById('phoneFeedback');

    if (usernameValid) {
        usernameFeedback.textContent = '';
        usernameFeedback.style.display = 'none';
    } else {
        usernameFeedback.textContent = 'Username should be at least 5 characters long and contain only letters and numbers.';
        usernameFeedback.style.display = 'block';
    }

    if (emailValid) {
        emailFeedback.textContent = '';
        emailFeedback.style.display = 'none';
    } else {
        emailFeedback.textContent = 'Please enter a valid email address.';
        emailFeedback.style.display = 'block';
    }

    if (passwordValid) {
        passwordFeedback.textContent = '';
        passwordFeedback.style.display = 'none';
    } else {
        passwordFeedback.textContent = 'Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters.';
        passwordFeedback.style.display = 'block';
    }

    if (phoneValid) {
        phoneFeedback.textContent = '';
        phoneFeedback.style.display = 'none';
    } else {
        phoneFeedback.textContent = 'Please enter a valid phone number.';
        phoneFeedback.style.display = 'block';
    }

    var formValid = usernameValid && emailValid && passwordValid && phoneValid;

    if (formValid) {
        document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
        document.getElementById('registrationFeedback').style.display = 'block';
        // Handle form submission here, e.g. send data to the server
        // You can use the XMLHttpRequest object or the fetch API
        // For example:
        // fetch('/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, email, password, phone })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
    } else {
        document.getElementById('registrationFeedback').textContent = '';
        document.getElementById('registrationFeedback').style.display = 'none';
    }
});