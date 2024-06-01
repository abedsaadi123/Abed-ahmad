document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const correctEmail = 'correct@example.com'; 
        const correctPassword = 'correctpassword'; 
        if (email === correctEmail && password === correctPassword) {
            window.location.href = 'index.html'; 
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    });
});
