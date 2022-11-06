/**
 * Returns single node by specified selector.
 * @param {string} selector
 * @returns Element | null
 */
function selectNode(selector) {
  return document.querySelector(selector);
}
function selectNodes(selector) {
  return document.querySelectorAll(selector);
}

// Convert hex into rgb
/**
 * Convert hex-color value into rgb
 * @param {string} hex Hexadecimal format of color
 * @returns {Array<string>} array with three elements represents red green blue respectivly
 */
function hex2rgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
}

export { selectNode, selectNodes, hex2rgb };
