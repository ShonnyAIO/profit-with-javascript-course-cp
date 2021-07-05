console.log('hello');
//alert('This is Johnny'); Es un anuncio
// prompt('Cuantos anos tienes: ') //Es un formulario con alert
// Variables
let b = 'Cosas';
console.log(b);

let someNumber = 45;
console.log(someNumber);

/*
let age = prompt('What is your age?');
console.log(age);

document.getElementById('someText').innerHTML = "Your age is: "+age;*/

//Numbers in Javascript
let num1 = 10;
// Increment by 1
num1++;
// Decrement by 1
num1--;
console.log(num1);

// Dividir, multiplicar *, reaminder %
console.log(num1 / 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1 - Crear la funcion
2 - Llamar la funcion
*/

// Crear
function fun(){
    console.log('Esto es una funcion');
}
// Llamada
fun();

/* Crear una funcion que almacena el nombre y envia un saludo 
function greet(nombre){
    let results = 'Hola ' + nombre;
    console.log(results);
}

var name = prompt("Como te llamas ?");
greet(name);
*/



// Como crear argumentos
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);

}
sumNumbers(10, 10);

// While loops

// Pones falso no correra el ciclo, al cambio que true si

/* while(num < 100){
    num += 1;
    console.log(num);
}//end-while */

/*
for(let num = 0; num <= 100; num++){
    console.log(num);
} */

//Data types
// 18
let yourAge = 18; //number
let yourName = 'Bob'; //string
let name = {first: 'Jane', last: 'Doe'}; //Object
let truth = false; //Boolean
let groceries = ['apple', 'banana', 'oranges'] //array
let random; //undefined
let nothing = null; // value null

/* Strings
let fruit = 'Banana, apple, orange, blackberry';
let moreFruits = 'Banana\napple'; //new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('Ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //separado por coma
console.log(fruit.split('')); //separado por caracteres */


// let fruits = ['Banana', 'apple', 'orange', 'pineapples'];
let fruits = new Array('Banana', 'apple', 'orange', 'pineapples');

// alert(fruits[2]); // access value at index 2nd
fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to String: ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); //elimina el ultimo item
console.log(fruits.push('blackberries'), fruits); //agrega al ultimo item
console.log(fruits[4]);
fruits[fruits.length] = 'new fruits';
console.log(fruits);
fruits.shift(); // remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); // agregar el primer elemento
console.log(fruits);

let vegetables = ['asparagaus', 'tomato', 'broccoli'];

let allGroceries = fruits.concat(vegetables); //Concatena todos los elementos
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2]
console.log(someNumbers.sort(function(a,b){return a-b} )); // sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a} )); // sorted in descending order

let emptyArray = new Array();
for(let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript
// dictionarios in Python

let student = {
    first: 'Jonathan', 
    last: 'Torres',
    age: 25, 
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
// console.log(student.first);
// console.log(student.last);
student.first = 'Johnny';
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 are my target demographic
// && AND
var age = 45;
if( (age >= 18) && (age <= 35) ){
    status = 'target demo';
}else{
    status = 'not my audience'
}
console.log(status);

// Switch statements
// differentiate between weekday vs weekend
// Day 0 -> Sunday
// Day 6 -> Saturday ->
// Day 4 -> Thursday -> weekday
switch(6){
    case 0: text = "weekend"; break;
    case 5: text = "weekend"; break;
    case 6: text = "weekend"; break;
    default: text = "weekday";
}
console.log(text);
