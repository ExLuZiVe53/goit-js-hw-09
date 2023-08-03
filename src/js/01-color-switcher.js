import { getRandomHexColor } from '../helpers/getRandomHexColor';

const body = document.querySelector('body');
const startBtn = document.querySelector('body button[data-start]');
const stopBtn = document.querySelector('body button[data-stop]');
console.log(startBtn);

startBtn.addEventListener('click', onClick);
let colorChange = null;

function onClick() {
  startBtn.setAttribute('disabled', 'true');

  colorChange = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
  clearInterval(colorChange);
  startBtn.removeAttribute('disabled', 'true');
  startBtn.setAttribute('active', 'true');
}
// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     const randomColor = getRandomHexColor();
//     document.body.style.backgroundColor = randomColor;
//     document.body.style.btn = disabled;
//     function getRandomHexColor() {
//       return `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
//     }
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
// });
