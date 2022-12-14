import { selectNode } from './utils';

let controllers = [];

function clearControllers() {
  if (controllers.length) {
    for (const controller of controllers) {
      controller.abort();
    }
    controllers = [];
    return;
  }
}

export function listeners(buttonsArray, colorPickers) {
  clearControllers();

  for (let i = 0; i < buttonsArray.length; i++) {
    const controller = new AbortController();
    controllers.push(controller);
    buttonsArray[i].addEventListener(
      'click',
      () => {
        if (selectNode(`.${colorPickers[i].id} .input-range`)) {
          selectNode(
            `.${colorPickers[i].id} .input-range-one`
          ).remove();
          selectNode(
            `.${colorPickers[i].id} .input-range-two`
          ).remove();
          return;
        }

        const rangeInput1 = document.createElement('input');
        rangeInput1.setAttribute('type', 'range');
        rangeInput1.className = 'input-range input-range-one';

        const rangeInput2 = document.createElement('input');
        rangeInput2.setAttribute('type', 'range');
        rangeInput2.className = 'input-range input-range-two';

        colorPickers[i].parentNode.append(rangeInput1, rangeInput2);
      },
      { signal: controller.signal }
    );
  }
}
