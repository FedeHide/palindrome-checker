const label = document.getElementById('label');
const result = document.getElementById('result');
const definitionTrigger = document.getElementById('definition-trigger');
const icon = document.getElementById('icon');
const animatedText = document.querySelector('.definition-container__animated-text');
const interrogant = "What is a palindrome?";
const definition = "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing";

const userInput = document.getElementById('entry');
const checkButton = document.getElementById('checkButton');

let labelText = 'Check for a palindrome';
label.textContent = labelText;
let labelError = 'Input a text';

/*
* This function adds a typing effect, pushing a text letter by letter with a minimum delay.
*/
function textTypingEffect(e, text, i = 0) {
    e.textContent += text[i];

    if (i === text.length -1 ) {
        return;
    }

    setTimeout(() => {
        textTypingEffect(e, text, i + 1)
    }, 50);
}


textTypingEffect(animatedText, interrogant)

/*
* This function cleans content and pushes a new text. Takes off icon, text animation, pointer and remove listener.
*/
function clickHandler() {
    animatedText.textContent = "";
    textTypingEffect(animatedText, definition);
    icon.style.display = "none";
    animatedText.classList.remove('animated-text--animation');
    definitionTrigger.style.cursor = 'default';
    definitionTrigger.removeEventListener('click', clickHandler);
}

definitionTrigger.addEventListener('click', clickHandler);


/*
* This function checks if the user's input is a palindome or not.
*/

function checkForPalindrome (input) {

    // ! alert error on empty input
    if (input === '') {
        result.style.display = 'none';
        checkButton.classList.add('button--error');
        label.classList.add('label--error');
        checkButton.classList.remove('button--hover');
        label.textContent = labelError;
        setTimeout(() => {
            checkButton.classList.remove('button--error');
            checkButton.classList.add('button--hover');
            label.classList.remove('label--error');
            label.textContent = labelText;
        }, 1000);
        return
    }

    // * remove special characters and spaces from input.
    const cleanInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

    result.style.display = 'inline';

    // * Palindrome validation showing text when is <= 10 char. or defaul text.
    if (cleanInput.length <= 20) {
        cleanInput === [...cleanInput].reverse().join('') 
        ? textTypingEffect(result, `${input} IS a palindrome`) 
        : textTypingEffect(result, `${input} is NOT a palindrome`);
    } else {
        cleanInput === [...cleanInput].reverse().join('') 
        ? textTypingEffect(result, `Your text IS a palindrome`) 
        : textTypingEffect(result, `Your text is NOT a palindrome`);
    }
}

// * Trigger function on click.
checkButton.addEventListener('click', () => {
    result.textContent = '';
    checkForPalindrome(userInput.value);
})

// * Trigger function on enter.
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        result.textContent = '';
        e.preventDefault();
        checkForPalindrome(userInput.value);
    }
});

