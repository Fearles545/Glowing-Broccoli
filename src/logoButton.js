import { selectNode } from './utils';
import { changeColor, colorPickersValues } from './index';

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
});
/**
 * Function that starts iteration of linear-gradient degree by degreeDelta.
 */
function startDegreeIteration() {
  interval = setInterval(() => {
    deg = deg + degreeDelta;

    if (deg >= maxDegree) deg = minDegree;

    changeColor(colorPickersValues, deg);
  }, intervalTime);
}
/**
 * Funtion that stops iteration of linear-gradient degree.
 */
function stopTimer() {
  clearInterval(interval);
  interval = undefined;
}

export { deg };
