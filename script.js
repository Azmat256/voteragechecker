const ageInput = document.getElementById('age');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const age = Number(ageInput.value);

    if (ageInput.value === '') {
        alert('Please enter your age.');
        return;
    }

    if (Number.isNaN(age) || age < 0) {
        alert('Please enter a valid age.');
        return;
    }

    if (age >= 18) {
        alert('You are eligible to vote.');
    } else {
        alert('You are not eligible to vote yet.');
    }
});