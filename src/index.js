import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import {newArray} from './js/project.js';

async function newArray(wantedLength = 50) {
  let array = [];
  for (let i = 0; i < wantedLength; i++) {
    let random = Math.floor(Math.random() * 110) + 10;
    array.push(random);
  }

  const speed = 1000 - $('#delay').val();
  const bars = $('#bars');
  bars.html('');

  for (let i = 0; i < wantedLength; i++) {
    const bar = document.createElement('div');
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add('flex-item');
    await waitforme(speed);
    bars.append(bar);
  }
}

function waitforme(milisec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('');
    }, milisec);
  });
}

$(document).ready(function () {
  $('#random-array').click(function () {
    let arrayWidth = $('#array-width').val();
    newArray(arrayWidth);
  });
});
