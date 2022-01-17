'use strict';

let string = '';
const keys = document.querySelectorAll('.special');
const eq = document.querySelector('.equal');
const inputBox = document.querySelector('.input-box');
const answerBox = document.querySelector('.answer-box');
const clr = document.querySelector('.clr');
const ac = document.querySelector('.ac');

const reset = function () {
  answerBox.textContent = '0';
  string = '';
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function () {
    string += `${keys[i].textContent} `;
    answerBox.textContent = string;
  });
}

clr.addEventListener('click', function () {
  string = string.substring(0, string.length - 2);
  answerBox.textContent = string;
});

eq.addEventListener('click', function () {
  const evaluator = string.replaceAll(' ', '');
  try {
    const answer = eval(evaluator);
    inputBox.textContent = answer;
  } catch (error) {
    inputBox.textContent = 'error';
  }
  reset();
});
ac.addEventListener('click', function () {
  inputBox.textContent = '';
  reset();
});
