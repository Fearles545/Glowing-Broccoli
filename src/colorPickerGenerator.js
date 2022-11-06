import { selectNode } from './utils';
import {
  changeColor,
  colorPickersValues,
  resetArrays,
} from './index';
import { deg } from './logoButton';

const plusButton = selectNode('.plus');
const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#5a25f8',
  '#daa520',
];

const colorInputsContainer = selectNode('.inputs');
let colorInputsNumber = 2;

plusButton.addEventListener('click', () => {
  createColorPickers();
  resetArrays();
  changeColor(colorPickersValues, deg);
});

function createColorPickers(number = 1) {
  for (let i = 1; i <= number; i++) {
    const container = document.createElement('div');
    container.className = 'color-picker';

    const label = document.createElement('label');
    label.setAttribute('for', `picker${i}`);

    const input = document.createElement('input');
    input.setAttribute('type', 'color');
    input.id = `picker${i}`;
    input.setAttribute('value', `${colors[i]}`);

    container.append(label, input);
    colorInputsContainer.append(container);
  }
}

export { createColorPickers, colorInputsNumber, plusButton };
