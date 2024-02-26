'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import superIconOk from '../img/bi_check2-circle.svg';

const btnTarget = document.querySelector('.form button');

btnTarget.addEventListener('click', (event) => {
  event.preventDefault();

  const inputValue = document.querySelector('.form input[name="delay"]').value;
  const fieldsetValue = document.querySelector('.form fieldset input[name="state"]:checked').value;
  console.log(inputValue);
  console.log(fieldsetValue);
  if (inputValue <= 1) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter time in milliseconds',
    });
    inputValue = "";
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fieldsetValue === 'fulfilled') {
        resolve(inputValue);
      } else {
        reject(inputValue);
      }
    }, inputValue);
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

function changeFieldsetBorderColor(inputElement) {
  fieldsetElement.style.borderColor = inputElement.checked ? '#808080' : '#d3d3d3';
};

const fieldsetElement = document.querySelector('.form fieldset');
const inputElements = fieldsetElement.querySelectorAll('input');

for (const inputElement of inputElements) {
  inputElement.addEventListener('change', changeFieldsetBorderColor);
};
