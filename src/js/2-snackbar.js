  'use strict';

  import iziToast from 'izitoast';
  import 'izitoast/dist/css/iziToast.min.css';
  import superIconOk from '../img/bi_check2-circle.svg';

  const formTarget = document.querySelector('.form');

  const timeSnack = (event) => {
      event.preventDefault();
      const inputValue = event.target.elements.delay.value;
      const fieldsetValue = event.target.elements.state.value;
      formTarget.reset();
      return new Promise((resolve,reject) => {
          setTimeout(() => {
              if (fieldsetValue === 'fulfilled') {
                resolve(inputValue);  
              }
              else {
                reject(inputValue); 
              };
          }, inputValue);
      })
  };
  
  formTarget.addEventListener('submit', event => {
      timeSnack(event)
      .then(value => 
              iziToast.success({
                  backgroundColor: '#59A10D',
                  iconUrl: superIconOk,
                  iconColor: '#FFFFFF',
                  titleColor: '#FFFFFF',
                  progressBarColor: '#326101',
                  position: 'topCenter',
                  timeout: 3000,
                  closeColor: '#FFFFFF',
                  theme: 'dark',
                  title: 'OK',
                  message: `Fulfilled promise in ${value} ms`,
              })
          )
      .catch(error =>
              iziToast.error({
                title: 'Rejected Promise',
                position: 'topCenter',
                message: `❌ Promise rejected in ${error} ms`,
              })
          )    
  });


  function changeFieldsetBorderColor(inputElement) {
    fieldsetElement.style.borderColor = inputElement.checked ? '#808080' : '#d3d3d3';
  };

  const fieldsetElement = document.querySelector('.form fieldset');
  const inputElements = fieldsetElement.querySelectorAll('input');

  for (const inputElement of inputElements) {
    inputElement.addEventListener('change', changeFieldsetBorderColor);
  };
