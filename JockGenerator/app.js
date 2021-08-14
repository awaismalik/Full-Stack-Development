document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

    // Get Number of jokes
    const number = document.querySelector('input[type="number"]').value;


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // Use Custom Name instead of Chuck Norris
    // xhr.open('GET', `http://api.icndb.com/jokes/random/${number}?firstName=John&lastName=Smith`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`
                });
            } else {
                output += '<li>Something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}