const inputField = document.querySelector('#grid-input');
const colorInput = document.querySelector('#color-input');
let userColor = 'black';
colorInput.addEventListener('change', () => {
  console.log(colorInput.value);
  userColor = colorInput.value;
});
const gridContainer = document.querySelector('#grid-container');
inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    updateUI();
  }
});
let gridUsed = 0;
function updateUI() {
  const h1 = document.querySelector('h1');
  const userInput = inputField.value;
  inputField.value = '';
  if (userInput > 100 || userInput < 0) {
    alert('Please Input a number between 1 and 100');
    return;
  }
  h1.textContent = `${userInput} x ${userInput}`;
  if (!gridUsed) {
    createGrid(userInput);
  } else {
    clearGrid(userInput);
  }
}
function createGrid(x) {
  const boxWidth = gridContainer.getBoundingClientRect().width - 2;
  const squareSize = boxWidth / x;
  const sum = boxWidth / squareSize;
  const numCubes = sum ** 2;
  gridUsed = 1;
  for (let i = 0; i < numCubes; i++) {
    const div = document.createElement('div');
    div.style.height = `${squareSize}px`;
    div.style.width = `${squareSize}px`;
    div.classList = 'grid-item';
    gridContainer.appendChild(div);
  }
  addColor();
}
function clearGrid(userInput) {
  const div = document.querySelectorAll('.grid-item');
  div.forEach((e) => {
    gridContainer.removeChild(e);
  });
  gridUsed = 0;
  createGrid(userInput);
}
function addColor() {
  const div = document.querySelectorAll('.grid-item');
  div.forEach((e) => {
    e.addEventListener('mouseover', colorSelector);
  });
}
function colorSelector(el) {
  el.target.style.backgroundColor = `${userColor}`;
}
