import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import {newArray} from './js/project.js';

function newArray(wantedLength = 50) {
  let array = [];
  for (let i = 0; i < wantedLength; i++) {
    let random = Math.floor(Math.random() * 110) + 10;
    array.push(random);
  }

  const bars = document.querySelector('#bars');
  bars.innerHTML = '';

  for (let i = 0; i < wantedLength; i++) {
    const bar = document.createElement('div');
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add('flex-item');
    bars.appendChild(bar);
  }
}

$(document).ready(function () {
  $('#random-array').click(function () {
    let arrayWidth = $('#array-width').val();
    console.log(arrayWidth);
    newArray(arrayWidth);
  });
});
