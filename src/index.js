import { selectNode, selectNodes, hex2rgb } from './utils';
import { deg } from './logoButton';
import {
  createColorPickers,
  colorInputsNumber,
  colorStopButtons,
} from './colorPickerGenerator';
import { listeners } from './colorStops';

const body = selectNode('#body');

let colorPickersValues = [];
let colorPickers = [];

createColorPickers(colorInputsNumber);
resetArrays();
listeners(colorStopButtons, colorPickers);

function resetArrays() {
  colorPickersValues = [];
  colorPickers = [];

  for (const picker of selectNodes('.input-picker')) {
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
