function appendDisp(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function calcSin() {
    const display = document.getElementById('display');
    display.value = Math.sin(eval(display.value));
  }
  
  function calcCos() {
    const display = document.getElementById('display');
    display.value = Math.cos(eval(display.value));
  }
  
  function calcTan() {
    const display = document.getElementById('display');
    display.value = Math.tan(eval(display.value));
  }
  
  function calcExp() {
    const display = document.getElementById('display');
    display.value = Math.exp(eval(display.value));
  }
  
  function calcSqrt() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
  }
  
  function calcLog() {
    const display = document.getElementById('display');
    display.value = Math.log10(eval(display.value));
  }
  
  function calcLn() {
    const display = document.getElementById('display');
    display.value = Math.log(eval(display.value));
  }
  
  function calcSquare() {
    const display = document.getElementById('display');
    display.value = Math.pow(eval(display.value), 2);
  }
  
  function calcCube() {
    const display = document.getElementById('display');
    display.value = Math.pow(eval(display.value), 3);
  }
  
  function calcMod() {
    const display = document.getElementById('display');
    display.value = eval(display.value) % 1 === 0 ? eval(display.value) : eval(display.value).toFixed(2);
  }
  
  function calcFactorial() {
    const display = document.getElementById('display');
    const num = eval(display.value);
    display.value = factorial(num);
  }
  
  function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
  }
  
  function calc() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
  }
  
  function clearDisp() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }