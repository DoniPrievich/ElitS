// ГЛОБАЛБНЫЕ ПЕРЕМЕННЫЕ
let nameDon = "Doni";
let age = 34;
const lil = "Lili";
let booLean = true;

// СЕЛЕКТОРЫ ДЛЯ ВЫБОРКИ ЭЛЕМЕНТОВ СТРАНИЦЫ
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");

// ОТЛАДКА КОДА
console.log(navLinks);

// ФУНКЦИИ
function sayHello(params) {
  let message = "Hello JS " + nameDon;
  console.log(message);
}
// ВЫЗОВ ФУНКЦИИ
sayHello();

function simpleMath(params) {
  let result = 1 + 3;
  console.log(result);
}

simpleMath();

// ФУНКЦИЯ С ПАРАМЕТРАМИ
function simpleMath2(a, b) {
  let result = a + b;
  console.log(result);
}

simpleMath2(232, 456);

// ФУНКЦИЯ С return
function simpleMath3(a, b) {
  let result = a + b;
  return result;
}

let summa = simpleMath3(232, 456);
console.log(summa);

// ОБРАБОТЧИК СОБЫТИЙ
window.addEventListener("scroll", checkScroll); //сокращенный вариант

document.addEventListener("DOMContentLoaded", function () {
  checkScroll();
});

function checkScroll() {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("red");
  } else {
    header.classList.remove("red");
  }
}

const testBtn = document.querySelector("#testBtn");

testBtn.addEventListener("click", function name(params) {
  console.log("doni");
});

/* navLinks.addEventListener('click', function name(params) {
  console.log('linked');
}); */

for (let navItem of navLinks) {
  navItem.addEventListener("click", function (params) {
    console.log(navItem.text);
  });
}

// CALCULATOR


function calculate() {
  var square = Number (document.getElementById('inp11').value);
  var stoimost = Number (document.getElementById('inp12').value);
  var choice = Number (document.getElementById('inp2').value);
  var tim = Number(document.getElementById('inp3').value);
  var ram30 = 0;
  var ram50 = 0;
  var ram70 = 0;
  var ram100 = 0;
  if (choice == 30){
    var sum = (stoimost * square);
    var resultsum = sum - sum * ram30;
    var skidki = sum - resultsum;
    var result = Math.ceil(resultsum / tim);
  }
  else if(choice == 50){
    var sum = (stoimost * square);
    var resultsum = sum - sum * ram50;
    var skidki = sum - resultsum;
    var result = Math.ceil(resultsum/tim);
  }
  else if(choice==70){
    var sum = (stoimost * square);
    var resultsum=sum - sum * ram70;
    var skidki = sum - resultsum;
    var result=Math.ceil(resultsum/tim);
  }
  else if(choice==100){
    var sum = (stoimost * square);
    var resultsum = sum - sum * ram100;
    var skidki = sum - resultsum;
    var result=Math.ceil(resultsum);
  }


  document.getElementById('hata2').innerHTML='<b>'+ sum +' </b> ' + " сомов общая стоимость квартиры";
  // ! document.getElementById('skidok').innerHTML= ' <b> ' + resultsum + ' </b> ' + " сомов - цена со скидкой";
  // ! document.getElementById('skidki').innerHTML= " Ваша скидка составляет " + ' <b> ' + skidki +' </b> ' + " сомов";
  document.getElementById('result').innerHTML= ' <b> '+result+' </b> ' + " сомов Ваш ежемесячный платеж";
}