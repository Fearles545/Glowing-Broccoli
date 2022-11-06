import { selectNode, selectNodes, hex2rgb } from './utils';
import { deg } from './logoButton';
import {
  createColorPickers,
  colorInputsNumber,
} from './colorPickerGenerator';

const body = selectNode('#body');
const allPickers = selectNodes('.inputs input');
let colorPickersValues = [];
let colorPickers = [];

createColorPickers(colorInputsNumber);

for (const picker of selectNodes('.inputs input')) {
  colorPickers.push(picker);
  colorPickersValues.push(hex2rgb(picker.value));
}

function resetArrays() {
  colorPickersValues = [];
  colorPickers = [];

  for (const picker of selectNodes('.inputs input')) {
    colorPickers.push(picker);
    colorPickersValues.push(hex2rgb(picker.value));
  }

  for (let i = 0; i < colorPickers.length; i++) {
    colorPickers[i].addEventListener('input', () => {
      colorPickersValues[i] = hex2rgb(colorPickers[i].value);
      changeColor(colorPickersValues, deg);
    });
  }
}

// Add eventListeners for every input on change color
for (let i = 0; i < colorPickers.length; i++) {
  colorPickers[i].addEventListener('input', () => {
    colorPickersValues[i] = hex2rgb(colorPickers[i].value);
    changeColor(colorPickersValues, deg);
  });
}

// Change background css-property of body into linear-gradient with actual colors of colorpickers
function changeColor(colorPickersArray, degree) {
  let background = `linear-gradient(${degree}deg,`;

  for (const el of colorPickersArray) {
    if (
      colorPickersArray.indexOf(el) ===
      colorPickersArray.length - 1
    ) {
      background += `rgb(${el[0]}, ${el[1]}, ${el[2]}))`;
    } else {
      background += `rgb(${el[0]}, ${el[1]}, ${el[2]}),`;
    }
  }

  body.style.background = background;
}

export { changeColor, colorPickersValues, colorPickers, resetArrays };
