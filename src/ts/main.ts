interface HTMLElements {
    label: HTMLElement | null;
    result: HTMLElement | null;
    definitionTrigger: HTMLElement | null;
    icon: HTMLElement | null;
    animatedText: HTMLElement | null;
    userInput: HTMLInputElement | null;
    checkButton: HTMLElement | null;
}

const elements: HTMLElements = {
    label: document.getElementById('label'),
    result: document.getElementById('text-result'),
    definitionTrigger: document.getElementById('definition-trigger'),
    icon: document.getElementById('icon'),
    animatedText: document.querySelector('.definition-container__animated-text'),
    userInput: document.getElementById('text-input') as HTMLInputElement,
    checkButton: document.getElementById('check-btn')
};

const definition: string = "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing";

let labelText: string = "Check for a palindrome";
if (elements.label) elements.label.textContent = labelText;
let labelError: string = "Input a text";

/*
* This function adds a typing effect, pushing a text letter by letter with a minimum delay.
*/
function textTypingEffect(e: HTMLElement | null, text: string, i: number = 0): void {
    if (e) {
        e.textContent += text[i];

        if(i=== text.length - 1) {
            return;
        }

        setTimeout(() => {
            textTypingEffect(e, text, i + 1)
        }, 50);
    }
}

textTypingEffect(elements.animatedText, labelText);

/*
* This function cleans content and pushes a new text. Takes off icon, text animation, pointer and remove listener.
*/

function clickHandler(): void {
    if(elements.animatedText && elements.icon && elements.definitionTrigger) {
        elements.animatedText.textContent = "";
        textTypingEffect(elements.animatedText, definition);
        elements.icon.style.display = "none";
        elements.animatedText.classList.remove('animated-text--animation');
        elements.definitionTrigger.style.cursor = 'default';
        elements.definitionTrigger.removeEventListener('click', clickHandler);
    }
}

if(elements.definitionTrigger) elements.definitionTrigger.addEventListener('click', clickHandler);

/*
* This function checks if the user's input is a palindome or not.
*/
function checkForPalindrome (input: string): void {

    if (elements.result && elements.checkButton && elements.label) {
        // ! alert error on empty input
        if (input === '') {
            elements.result.style.display = 'none';
            elements.checkButton.classList.add('button--error');
            elements.label.classList.add('label--error');
            elements.checkButton.classList.remove('button--hover');
            elements.label.textContent = labelError;
            setTimeout(() => {
                if (elements.checkButton && elements.label) {
                    elements.checkButton.classList.remove('button--error');
                    elements.checkButton.classList.add('button--hover');
                    elements.label.classList.remove('label--error');
                    elements.label.textContent = labelText;
                }
            }, 1000);
            return
        }
    }


    // * remove special characters and spaces from input.
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if(elements.result)elements.result.style.display = 'inline';

    // * Palindrome validation showing text when is <= 20 char. or defaul text.
    const reversedInput = cleanInput.split('').reverse().join('');
    const palindromeMessage = cleanInput === reversedInput ? `${input} IS a palindrome` : `${input} is NOT a palindrome`;
    const defaultPalindromeMessage = cleanInput === reversedInput ? `Your text IS a palindrome` : `Your text is NOT a palindrome`;

    if (cleanInput.length <= 20) {
        textTypingEffect(elements.result, palindromeMessage);
    } else {
        textTypingEffect(elements.result, defaultPalindromeMessage);
    }
}

// * Trigger function on click.
if(elements.checkButton) {
    elements.checkButton.addEventListener('click', () => {
        if(elements.result && elements.userInput) {
            elements.result.textContent = '';
            checkForPalindrome(elements.userInput.value);
        }
    })
}

// * Trigger function on enter.
if (elements.userInput) {
    elements.userInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            if(elements.result && elements.userInput) {
                elements.result.textContent = '';
                e.preventDefault();
                checkForPalindrome(elements.userInput.value);    
            } 
        }
    });
}