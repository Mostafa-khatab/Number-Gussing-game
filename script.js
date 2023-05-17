let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 100) + 1;

btn.addEventListener('click', function () {
    let input = parseInt(document.getElementById('userInput').value);

    if (isNaN(input)) {
        output.innerHTML = 'Invalid input. Please enter a number.';
    } else if (input === number) {
        output.innerHTML = `You guessed right! Your number was ${number}.`;
    } else if (input < number) {
        output.innerHTML = 'You guessed too low!';
    } else if (input > number) {
        output.innerHTML = 'You guessed too high!';
    }

    // Clear the input field
    document.getElementById('userInput').value = '';
});
