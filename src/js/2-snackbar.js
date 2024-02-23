'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import superIconOk from '../img/bi_check2-circle.svg';



document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const delayInMilliseconds = parseInt(event.target.elements.delay.value);
  const promiseState = event.target.elements.state.value;

  if (delayInMilliseconds <= 1) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter time in milliseconds',
    });
    delayInMilliseconds = "";
  };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseState === 'fulfilled') {
        resolve(delayInMilliseconds);
      } else {
        reject(delayInMilliseconds);
      }
    }, delayInMilliseconds);
  });

  promise
    .then((delay) => {
      iziToast.success({
          backgroundColor: '#59A10D',
          iconUrl: superIconOk,
          iconColor: '#FFFFFF',
          titleColor: '#FFFFFF',
          progressBarColor: '#326101',
          position: 'topRight',
          timeout: 3000,
          closeColor: '#FFFFFF',
          theme: 'dark',
          title: 'OK',
          message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Rejected Promise',
        message: `❌ Promise rejected in ${delay}ms`,
      });
    });
});

const fieldsetElement = document.querySelector('.form fieldset');

const inputElements = fieldsetElement.querySelectorAll('input');

for (const inputElement of inputElements) {
  inputElement.addEventListener('change', () => {
    if (inputElement.checked) {
      fieldsetElement.style.borderColor = '#808080';
    } else {
      fieldsetElement.style.borderColor = '#808080';
    }
  });
}