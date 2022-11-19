import { selectNode } from './utils';
import { changeColor, colorPickersValues } from './index';
import { colorInputsContainer } from './colorPickerGenerator';

const logo = selectNode('.logo');
const minDegree = 0;
const maxDegree = 360;
const intervalTime = 1;
const degreeDelta = 0.01;

let interval = undefined;
let logoClicked = false;
let deg = 0;

logo.addEventListener('click', () => {
  logoClicked = !logoClicked;
  logoClicked ? startDegreeIteration() : stopTimer();
  logo.classList.toggle('logo-clicked');
});
/**
 * Starts iteration of linear-gradient degree by degreeDelta.
 */
function startDegreeIteration() {
  interval = setInterval(() => {
    deg = deg + degreeDelta;

    if (deg >= maxDegree) deg = minDegree;

    changeColor(colorPickersValues, deg);
  }, intervalTime);

  colorInputsContainer.style.opacity = '0';
}
/**
 * Stops iteration of linear-gradient degree.
 */
function stopTimer() {
  clearInterval(interval);
  interval = undefined;
  colorInputsContainer.style.opacity = '1';
}

export { deg };
