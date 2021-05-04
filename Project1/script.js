// Retrieving HTML elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function to update class and message of errors
function showError(input, message) {
    // Get the parent element of the input field (.from-control)
    const formControl = input.parentElement;
    // Replace the class - add class
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;

}

// Function to update class for success

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check if require fields have data

function checkRequired(inputArray) {

    inputArray.forEach(function (input) {
        if (input.value === '') {
            showError(input, `${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get the id of input field with proper Uppercase

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function to Validate Email

function isValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listener
// Create Event Listener for Submit Button
form.addEventListener('submit', function (e) {
    // Stop page from reloading on submit
    e.preventDefault();

    checkRequired([username, email, password, password2])

});