import { convertMs } from '../helpers/convertMs';
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// const flatpickr = require('flatpickr');

// flatpickr(element, {});

// flatpickr('#myID', {});

// flatpickr('.anotherSelector');

const refs = {
  inputBtn: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

let changeDays = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] > new Date() || selectedDates[0] === new Date()) {
      refs.startBtn.setAttribute('disabled', 'true');
    } else {
      refs.startBtn.removeAttribute('disabled', 'true');
      refs.startBtn.setAttribute('active', 'true');
      refs.inputBtn.setAttribute('disabled', 'true');
      changeDays = selectedDates[0];
    }
  },
};

flatpickr(refs.inputBtn, options);

setInterval(() => {
  const currentDate = new Date();

  const days = currentDate.getDay();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formatTime = `${days.toString().padStart(2, '0')} : ${hours
    .toString()
    .padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds
    .toString()
    .padStart(2, '0')}`;

  refs.day.textContent = days;
  refs.hour.textContent = hours;
  refs.minute.textContent = minutes;
  refs.second.textContent = seconds;
  console.log(formatTime);
}, 1000);
