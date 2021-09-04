const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
    // console.log(username.value);
    // console.log(form.username.value);

    const username = form.username.value;
    e.preventDefault();

    if (usernamePattern.test(username)) {
        feedback.textContent = `That username ${username} is correct`;
    } else {
        feedback.textContent = 'That username contain letters only & between 6 to 12 characters long';
    }
});

// live feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);

    if (usernamePattern.test(e.target.value)) {
        // console.log('passed');
        form.username.setAttribute('class', 'success');

    } else {
        form.username.setAttribute('class', 'error');
    }
});