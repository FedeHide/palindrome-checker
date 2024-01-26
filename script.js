const icon = document.getElementById('icon');
const animatedText = document.querySelector('.definition-container__animated-text');
const text = "What is a palindrome?";
const definition = "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing";

function textTypingEffect(e, text, i = 0) {
    e.textContent += text[i];

    if (i === text.length -1 ) {
        return;
    }

    setTimeout(() => {
        textTypingEffect(e, text, i + 1)
    }, 50);
}


textTypingEffect(animatedText, text)

icon.addEventListener('click', () => {
    animatedText.textContent = "";
    textTypingEffect(animatedText, definition)
    icon.style.display = "none";
});
