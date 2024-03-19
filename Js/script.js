var text = document.getElementById("display")

function addTheNumber(number){
    text.value += number;
}
function addTheSymbol(operator){
    text.value += operator;
}
function deleteOnDisplay(){
    text.value = '';
}
function operateToValue(){
    text.value = eval(text.value);
}