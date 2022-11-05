import { selectNode, hex2rgb } from './utils';

const body = selectNode('#body');
const logo = selectNode('.logo');
let interval;
let logoClicked = false;

let deg = 0;

// Convert all inputs values into rgb format
let firstColor = hex2rgb(selectNode('#red').value);
let secondColor = hex2rgb(selectNode('#green').value);
let thirdColor = hex2rgb(selectNode('#blue').value);

let colorPickersValues = [firstColor, secondColor, thirdColor];

const colorPickers = [
  selectNode('#red'),
  selectNode('#green'),
  selectNode('#blue'),
];

// Add eventListeners for every input on change color
for (let i = 0; i < colorPickers.length; i++) {
  colorPickers[i].addEventListener('input', () => {
    colorPickersValues[i] = hex2rgb(colorPickers[i].value);
    changeColor();
  });
}

// Change background css-property of body into linear-gradient with actual colors of colorpickers
let changeColor = () =>
  (body.style.background = `
linear-gradient(
  ${deg}deg,
  rgb(${colorPickersValues[0][0]}, ${colorPickersValues[0][1]}, ${colorPickersValues[0][2]}), 
  rgb(${colorPickersValues[1][0]}, ${colorPickersValues[1][1]}, ${colorPickersValues[1][2]}),
  rgb(${colorPickersValues[2][0]}, ${colorPickersValues[2][1]}, ${colorPickersValues[2][2]})
  )
`);

// Listener for click on broccoli logo to start/stop changing degree
logo.addEventListener('click', () => {
  logoClicked = !logoClicked;
  if (logoClicked) {
    interval = setInterval(() => {
      deg++;
      changeColor();
    }, 10);
  } else {
    clearInterval(interval);
    interval = undefined;
  }
});

export { changeColor };
