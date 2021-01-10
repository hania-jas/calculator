const buttons = document.querySelectorAll('.button');
const output = document.getElementById('output');
const plusBtn = document.getElementById('plus');
const actionBtn = document.getElementsByClassName('action');
const leftBracket = document.getElementById('leftBracket');


const calc = textFromScreen => {
    return Function('return ' + textFromScreen)();
}
const evaluateScreenDisplay = (e) => {

    let clickedButton = e.target;
    let clickedValue = clickedButton.innerText;
    let textFromScreen = output.innerText;

    if (clickedValue === '=' && textFromScreen !== '') {

        output.innerHTML = calc(textFromScreen);

    } else if (clickedValue === 'C') {
        cleaning();

    } else if (((clickedValue === '+' && textFromScreen.charAt(textFromScreen.length - 1) === '+') || (clickedValue === '-' && textFromScreen.charAt(textFromScreen.length - 1) === '-') || (clickedValue === '/' && textFromScreen.charAt(textFromScreen.length - 1) === '/') || (clickedValue === '*' && textFromScreen.charAt(textFromScreen.length - 1) === '*') || (clickedValue === '.' && textFromScreen.charAt(textFromScreen.length - 1) === '.') || (clickedValue === '(' && textFromScreen.charAt(textFromScreen.length - 1) === '(') || (clickedValue === ')' && textFromScreen.charAt(textFromScreen.length - 1) === ')')) || ((clickedValue === '-' || clickedValue === '+' || clickedValue === '/' || clickedValue === '*' || clickedValue === ')' || clickedValue === '.') && (textFromScreen.charAt(textFromScreen.length - 1) === '+' || textFromScreen.charAt(textFromScreen.length - 1) === '-' || textFromScreen.charAt(textFromScreen.length - 1) === '*' || textFromScreen.charAt(textFromScreen.length - 1) === '/' || textFromScreen.charAt(textFromScreen.length - 1) === '(')) || ((clickedValue === '=' || clickedValue === '-' || clickedValue === '+' || clickedValue === '/' || clickedValue === '*' || clickedValue === ')' || clickedValue === '.') && (textFromScreen === '')) || (((clickedValue === '(' && textFromScreen.charAt(textFromScreen.length - 1) >= '0') || (clickedValue === '(' && textFromScreen.charAt(textFromScreen.length - 1) === ')')) || clickedValue === ')' && !textFromScreen.includes('('))) {

        clickedValue = '';

    } else {
        output.innerHTML = output.innerHTML + clickedValue;
    }


    changeFontSize(textFromScreen)

}

const changeFontSize = textFromScreen => {
    if (textFromScreen.length >= 30) {
        output.classList.add('changeFont');
    } else {
        output.classList.remove('changeFont');
    }
}

function cleaning() {
    output.innerHTML = "";
}

buttons.forEach(button => { button.addEventListener('click', evaluateScreenDisplay) })