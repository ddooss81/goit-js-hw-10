'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePickerElement = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

let selectedDate;
startButton.disabled = true;

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: handleDatePickerClose,
};

flatpickr(dateTimePickerElement, flatpickrOptions);

function handleDatePickerClose(chosenDates) {
  selectedDate = chosenDates[0];
  if (selectedDate <= new Date()) {
      
    iziToast.warning({
          backgroundColor: '#EF4040',
          icon: '<img src="./img/src/img/bi_x-octagon.svg" class="my-svg-class">',
          titleColor: '#FFFFFF',
          progressBarColor: '#B51B1B',
          position: 'topRight',
          timeout: 3000,
          closeCaolor: '#FFFFFF',
          theme: 'dark',
        
          title: 'Please choose a date in the future',
    });
    startButton.disabled = true;
  } else {
      startButton.disabled = false;
      startButton.style.backgroundColor = "#4E75FF";
      startButton.style.color = "#FFFFFF";
  }
}

function convertMillisecondsToTime(milliseconds) {
  const secondsInDay = 1000 * 60 * 60 * 24;

  const days = Math.floor(milliseconds / secondsInDay);
  const hours = Math.floor((milliseconds % secondsInDay) / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function formatTime(time) {
  return [
    padWithZero(time.days),
    padWithZero(time.hours),
    padWithZero(time.minutes),
    padWithZero(time.seconds),
  ].join(':');
}

function padWithZero(number) {
  return String(number).padStart(2, '0');
}

function startCountdown() {
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const timeRemaining = selectedDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      document.querySelector('.timer').textContent = '00:00:00:00';
      return;
    }

    const formattedTime = formatTime(convertMillisecondsToTime(timeRemaining));

    document.querySelector('[data-days]').textContent = formattedTime.split(':')[0];
    document.querySelector('[data-hours]').textContent = formattedTime.split(':')[1];
    document.querySelector('[data-minutes]').textContent = formattedTime.split(':')[2];
    document.querySelector('[data-seconds]').textContent = formattedTime.split(':')[3];
  }, 1000);
}

startButton.addEventListener('click', () => {
  dateTimePickerElement.disabled = true;
    startButton.disabled = true;
    startButton.style.backgroundColor = "#CFCFCF";
    startButton.style.color = "#989898";
  startCountdown();
});