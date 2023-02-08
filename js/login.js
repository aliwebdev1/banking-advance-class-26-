document.getElementById('submit-buttton').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    // console.log(email, passwordField)
    const password = passwordField.value;

    if (email == 'eShikhon@gmail.com' && password == 123456) {
        window.location.href = 'banking.html';
    }
})