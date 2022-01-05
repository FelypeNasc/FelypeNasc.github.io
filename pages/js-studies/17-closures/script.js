const increaseSizeButton = document.getElementById('increaseTextSizeButton');
const decreaseSizeButton = document.getElementById('decreaseTextSizeButton');
const historyText = document.getElementById('historyText');
increaseSizeButton.addEventListener('click', () => {increaseTextSize(historyText)});
decreaseSizeButton.addEventListener('click', () => {decreaseTextSize(historyText)});

const textSizeChange = (incOrDec) => {
    return function (text) {
        let historyTextFontSize = parseFloat(window.getComputedStyle(historyText).getPropertyValue('font-size'))
        console.log(historyTextFontSize);

        if (incOrDec === '+') {
            historyText.style.fontSize = historyTextFontSize + 1 + 'px';
        } else if (incOrDec === '-') {
            historyText.style.fontSize = historyTextFontSize - 1 + 'px';
        }
    }
}

const increaseTextSize = textSizeChange('+')
const decreaseTextSize = textSizeChange('-')

