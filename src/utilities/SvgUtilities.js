export const setColor = (element, color) => {
  element.setAttribute("fill", color);
};

export const getColor = element => {
  return element.getAttribute("fill");
};

export const getName = element => {
  return element.getAttribute("name");
};

export const removeColor = element => {
  return element.removeAttribute("fill");
};


export const setElementColorFadeout = (element, color, time) => {
  setColor(element, color);
  setTimeout(() => removeColor(element), time);
};
