// ways to print in java Script

// alert("me");

// documents.write("This is documents write")
// javascript console API
// console.log("Hello World");
// console.warn("This is a warning");
// console.error("This is an error");


// JavaScript Variables
// what are variables ?
// containers to store data Values

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);
// data types in Java Script

// number 

var num1 = 455;
var num2 = 56.76;

// string
var str1 = "This is a string";
var str2 = 'This is also a string';


// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977

}

// console.log(marks);

//Booleans
var a = true;
var b = false;


// console.log(a, b);
var und = undefined;
// console.log(und);

var n = null;

// console.log(n);

//  at a very high level therer

var arr = [1, 2, 3, 4, 5]

// console.log(arr);

//operators in JavaScript



var a = 34;
var b = 56;

console.log("the value of a + b is", a + b);
console.log("the value of a - b is", a - b);
console.log("the value of a * b is", a * b);
console.log("the value of a / b is", a / b);


//assignment Operator 
var c = b;
// console.log(c);

//comparison Operators

var x = 34;
var y = 56;

// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// logical Operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// logical not
// console.log(!false);
// console.log(!true);

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
/*
c1 = avg(4, 6);
c2 = avg(14, 16);

// console.log(c1, c2);

//conditions in java script


var age = 25;
if (age > 18){
console.log('You can dring rasna water');
}

else{ 
    console.log('You cannot drint rasna water')
}

//single if statement
if(age > 32) { 
    console.log("You are not a kid");

}

else if(age > 22) {
    console.log("Yes bachhe nahi rahe");
    
}

else if(age > 18) {
    console.log(" 18  bachhe nahi rahe");
    
}
else{
    console.log("Bachhe ho");

}

console.log("End of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for(var i = 0;i<arr.length;i++){
//     if(i==2) {
//         // break;
//         continue;

//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element)

// })

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;

// }

// do {
//     console.log(arr[j]);
//     j++;

// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
// myArr.shift()
// console.log(myArr.unshift("Harry"));

// const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a Good Boy Good Good"
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Good"));
// console.log(myLovelyString.slice(1,3))

d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("Good", "Bad");
// console.log(d, myLovelyString);

myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// Dom Manupulation

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elem);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-sucess");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
// tn[0].appendChild(createdElement);

createdElement = document.createElement('p');
createdElement.innerText = "This is a Created para"

// // Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
 
// // Events in JavaScript

// function clicked(){
//     console.log('The button was clicked')

// }

// window.onload = function(){
//     console.log('The document was loaded')


// }

// firstContainer.addEventListener('click', function() {
//         console.log("Click hua");
//     })

    // SetTimeout and setintervel

// // Arrow Function
// function sum(){
//     return 5;

// }
// sum = (a,b)=>{
//     return a+b;

// }
// logKero = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set Intervel Fired</b>"
//     console.log("I am Your Log");
// }
// // set time out and sent time intervel
// setInterval(logKero, 2000);

// local storage
// JavaScript Local Storage

// Data User

// JSON


// obj = {name: "harry", length: 1, a:{this: "tha\"t"}};


// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);

// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

// Template literals - backticks















