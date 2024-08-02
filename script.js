function appendToDisplay(value){
    document.getElementById('display');
    
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          display.value += ' ' + value + ' ';
        } else {
          display.value += value;
        }
      }

function clearDisplay(){
    document.getElementById('display').value='';
}
function calculate(){
    let result= eval(document.getElementById('display').value);
    document.getElementById('display').value=result
}