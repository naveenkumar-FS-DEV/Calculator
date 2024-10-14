let display = document.getElementById("display");

function addToDisplay(value){
    display.value = display.value + value;
}

function toClearDisplay(){
  display.value = " "
}

function toCalculate(){
  try {
    display.value = eval(display.value)
  } catch (error) {
     display.value = 'error'
  }
}