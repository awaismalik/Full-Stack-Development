const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    // console.log(score);
    // Show result on page
    scrollTo(0, 0);

    result.classList.remove('d-none');
    let outPut = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${outPut}%`;
        if (outPut === score) {
            clearInterval(timer);
        } else {
            outPut++;
        }
    }, 10);
});

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);


