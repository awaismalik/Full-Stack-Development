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

// Function check length for input field
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} need to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldId / (input)} need to be less then ${max} characters `);
    } else {
        showSuccess(input);
    }

}
// Function to check if password and confirm password match

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords don't match");
    }
}


// Function to Validate Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, ` Please Provide a valid Email `);
    }
}

// Event Listener
// Create Event Listener for Submit Button
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});