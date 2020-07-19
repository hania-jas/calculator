let button = document.querySelectorAll('.button');
let output = document.getElementById('output');

const onScreen = (e) => {

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

button.forEach(button => { button.addEventListener('click', onScreen) })