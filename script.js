const definitionTrigger = document.getElementById('definition-trigger');
const icon = document.getElementById('icon');
const animatedText = document.querySelector('.definition-container__animated-text');
const interrogant = "What is a palindrome?";
const definition = "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing";

const userInput = document.getElementById('entry');
const checkButton = document.getElementById('checkButton');
// const resultText = document.getElementById('');

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
        alert('Please input a valid text');
        return
    }

    // * remove special characters and spaces from input and palindrome validation.
    const cleanInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();
    cleanInput === [...cleanInput].reverse().join('') ? console.log('yes') : console.log('no');
}

checkButton.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
})