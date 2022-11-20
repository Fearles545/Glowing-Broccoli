import { selectNode, selectNodes, interger } from './utils';
import {
  changeColor,
  colorPickers,
  colorPickersValues,
  resetArrays,
} from './index';
import { deg } from './logoButton';
import { listeners } from './colorStops';
import { colors } from './colors';

const plusButton = selectNode('.plus');
const minusButton = selectNode('.minus');
const inputRangeOne = selectNode('.input-range-one');
const inputRangeTwo = selectNode('.input-range-two');
let colorStopButtons;

const colorInputsContainer = selectNode('.inputs');
let colorInputsNumber = 2;

function createColorPickers(number = 1) {
  for (let i = 1; i <= number; i++) {
    const container = document.createElement('div');
    container.className = `color-picker picker${
      selectNodes('.color-picker').length
    }`;

    const label = document.createElement('label');
    label.setAttribute(
      'for',
      `picker${selectNodes('.color-picker').length}`
    );

    const input = document.createElement('input');
    input.setAttribute('type', 'color');
    input.id = `picker${selectNodes('.color-picker').length}`;
    input.setAttribute('value', `${colors[interger(colors.length)]}`);
    input.className = 'input-picker';

    const colorStopButton = document.createElement('button');
    colorStopButton.innerText = 'Color Stop';
    colorStopButton.className = 'color-stop-button';

    container.append(label, input, colorStopButton);
    colorInputsContainer.append(container);
  }

  colorStopButtons = selectNodes('.color-stop-button');
}

plusButton.addEventListener('click', () => {
  createColorPickers();
  resetArrays();
  changeColor(colorPickersValues, deg);
  listeners(colorStopButtons, colorPickers);
});

minusButton.addEventListener('click', () => {
  let activePickers = selectNodes('.color-picker');

  if (activePickers.length > 2) {
    activePickers[activePickers.length - 1].remove();
    resetArrays();
    changeColor(colorPickersValues, deg);
    listeners(colorStopButtons, colorPickers);
    return;
  }
});

export {
  createColorPickers,
  colorInputsNumber,
  colorInputsContainer,
  colorStopButtons,
};
