'use strict'

const button = document.getElementById('count');

let countdown = 30;

const interval = setInterval(() => {
  
    button.textContent = countdown;
    countdown--;

    if (countdown < 0) {
      button.textContent = "Done!!"
      clearInterval(interval);
    }
}, 1000);
