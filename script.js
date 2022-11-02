'use strict';

const inputs = document.querySelectorAll('.form-control');
const dltEmail = document.getElementById('dlt-email');
const hidePasswd = document.getElementById('hide-passwd');
const icons = [dltEmail, hidePasswd];

inputs.forEach((input, idx) =>
  input.addEventListener('input', function () {
    if (this.value.length) icons[idx].classList.remove('hidden');
    else icons[idx].classList.add('hidden');
  })
);

dltEmail.addEventListener('click', function () {
  inputs[0].value = '';
  this.classList.add('hidden');
});

hidePasswd.addEventListener('click', function () {
  if (this.src.includes('svg')) {
    inputs[1].type = 'text';
    this.src = './asset/view.png';
  } else {
    inputs[1].type = 'password';
    this.src = './asset/Hide Icon.svg';
  }
});
