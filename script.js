oneNumber = document.getElementsByClassName("one number");
twoNumber = document.getElementsByClassName("two number");
threeNumber = document.getElementsByClassName("three number");
fourNumber = document.getElementsByClassName("four number");
fiveNumber = document.getElementsByClassName("five number");
sixNumber = document.getElementsByClassName("six number");
sevenNumber = document.getElementsByClassName("seven number");
eightNumber = document.getElementsByClassName("eight number");
nineNumber = document.getElementsByClassName("nine number");
starNumber = document.getElementsByClassName("star number");
zeroNumber = document.getElementsByClassName("zero number");
tagNumber = document.getElementsByClassName("tag number");
deleteButton = document.getElementById("delete");
myInput = document.getElementById("myInput");


deleteButton.addEventListener("click", function () {
    
    myInput.value = (myInput.value).slice(0, -1);
    
})

//My boring function declerations... :)

function oneFunc() {
    myInput.value += '1';
}

function twoFunc() {
  myInput.value += "2";
}

function threeFunc() {
  myInput.value += "3";
}

function fourFunc() {
  myInput.value += "4";
}

function fiveFunc() {
  myInput.value += "5";
}

function sixFunc() {
  myInput.value += "6";
}

function sevenFunc() {
  myInput.value += "7";
}

function eightFunc() {
  myInput.value += "8";
}

function nineFunc() {
  myInput.value += "9";
}

function starFunc() {
  myInput.value += "*";
}

function zeroFunc() {
  myInput.value += "0";
}

function tagFunc() {
  myInput.value += "#";
}






