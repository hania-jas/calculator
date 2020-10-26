const buttons = document.querySelectorAll('.button');
const output = document.getElementById('output');

const evaluateScreenDisplay = (e) => {

    let clickedButton = e.target;
    let clickedValue = clickedButton.innerText;

    if (clickedValue === '=') {
        let textFromScreen = output.innerText;
        output.innerHTML = eval(textFromScreen);
    } else if (clickedValue === 'C') {
        cleaning();
    } else {
        output.innerHTML = output.innerHTML + clickedValue;
    }
}

const cleaning = () => {
    output.innerHTML = "";
}

buttons.forEach(button => { button.addEventListener('click', evaluateScreenDisplay) })