import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from '../helpers/convertMs';

const refs = {
  inputBtn: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('body button[data-start]'),
  day: document.querySelector('.value[data-days]'),
  hour: document.querySelector('.value[data-hours]'),
  minute: document.querySelector('.value[data-minutes]'),
  second: document.querySelector('.value[data-seconds]'),
};

let changeDays = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date() || selectedDates[0] === new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      });

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

refs.startBtn.addEventListener('click', onClick);

function onClick() {
  const targetDates = changeDays;

  setInterval(() => {
    const currentDate = new Date();
    const ms = Number(targetDates - currentDate);
    if (ms > 0) {
      substitutionOfzero(convertMs(ms)), 1000;
    } else {
      refs.inputBtn.removeAttribute('disabled', 'true');
    }
  });

  function substitutionOfzero(value) {
    const values = Object.values(value);

    refs.day.textContent = values[0].toString().padStart(2, '0');
    refs.hour.textContent = values[1].toString().padStart(2, '0');
    refs.minute.textContent = values[2].toString().padStart(2, '0');
    refs.second.textContent = values[3].toString().padStart(2, '0');
  }
}
