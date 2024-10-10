showPasswordcheckbox.onclick = function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var checkbox = document.getElementById('showPasswordCheckbox');

    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

btnDisplay.onclick = function displayValues() {
    // Get values from input fields
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;

    // Construct message with the values
    var message = "First Name: " + firstName + "<br>Last Name: " + lastName + "<br>Email: " + email;

    // Display the message on the webpage
    document.getElementById('submittedValues').innerHTML = message;
}
