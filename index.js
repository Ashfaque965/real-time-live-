//1 // way to print in javascript
//console.log("hello world");
//alert("me")
//javascript console api
// document.write("this is document")

//2//javascript console api
//console.log("hello world", 4 + 6, "another log");

//console.log("hello world")
//console.warn("this is warning");
//console.error("this is an error")

//3. javascript variable
// what is variable ? - containers to store data  values
//    multi 
//    line
//     comment

/*var number1 = 34;
var number2 = 56;
console.log(number1 + number2)

//  datatype in javascript

var num1 = 455;
var num2 = 56.76;


// String

var str1 = "this is a string";
var str2 = 'this is also a string';


// objects

var marks = {

    ravi: 34,
    shubham: 78,
    harry: 99.977
}

//Booleans
var a = true;
var b = false;

console.log(a, b);

// var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

/*
// At very high level, there are two type of datatype in javascript
// 1 primitive : undefined, null ,  number , string , boolean , symbol

// 2 Reference  data types: Array , objects
*/


/*var arr = [1, 2, "king", 4, 5]
// console.log(arr)


// opereters in javascript
//  Arithmetic opereters
var a = 100;
var b = 10;
console.log("the value of a + b is ", a + b);
console.log("the value of a - b is ", a - b);
console.log("the value of a * b is ", a * b);
console.log("the value of a / b is ", a / b);

// Assignment opereters
var c = b; 
// c += 2;
// c -= 2; // c = c-2;
// c *= 2;
// c /= 2;

// console.log(c);
//comparion opereters

var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x > y);
// console.log(x < y);

// Logical operetors

// console.log(true && true)
// console.log(true && true)
// console.log(false && true)
// console.log(false && true)

//logical not

console.log(true|| true)
console.log(true || true)
console.log(false || true)
console.log(false || true)

console.log(!false);
console.log(!true);


function avg(a, b){
 return( a + b)/2;
}

c1 = avg(4 ,6);
c2 = avg(14 , 16);
console.log(c1 , c2);

// conditional in javascript

// var  age = 41;
// if (age >18) {

//     console.log('you an drink rasna water');
    
// }
// // else{
// //     console.log('you can not drink water');
// //     if - else statement
// //     if(age > 18){
// //         console.log('you can drink rasna  water');
// //     }
// // else {
// //     console.log('you can drink rasna water');
// // }

// // if-else 
// if -else Ladder
/*if (age > 32){
    console.log("you are not a kid")
}
else if (age >26 ) {

    console.log("bache nhi rhe");
}

var age = 11;

if (age > 18){
    console.log('you can not drink rasna water');
}
else{
    console.log('   you can drink rasna water');
}


age = 25;

if(age > 32){
    console.log("you are not a kid");
}
else if(age > 26){
    console.log("bacche nahi rhe" )
}
else if(age>22){

    console.log("yes bachhe nhi rahe")

}
else if (age > 18){
    console.log("18 bachhe nhi rhe ");

}
else{
    console.log("bache rhe ");
}
console.log("End of ladder");
*/
// var arr = [1, 2, 3, 4, 5, 6, 7];
// //  console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     //     console.log(arr[i]);

//     for (var i = 0; i < arr.length; i++)
//         if (i == 2) {
//             if (i == 2) {
//                 //break;

//                 continue;
//             }
//         }
//     console.log(arr[i])
// }


// arr.forEach(function(element){
//     console.log(element);
// })

//const ac = 0;
//ac++;
//ac = ac +1;
/*let j = 10;
// while (j < arr.lenght) {
//     console.log(arr[j]);
//     j++;
// }

do {

    console.log(arr[j]);
    j++;

} while (j < arr.lenght);

*/
// let myArr = ["Fan ", "camera", "34", null, true];
// // //Array Methods
// // console.log(myArr.length);
// // //myArr.pop();
// // //myArr.push(harry);
// // //myArr.shift()
// // console.log(myArr.unshift("Harry"))
// // console.log(myArr);

// // String Method in javaScript
// let myLovelyString = "Harry is a good boy";
// // console.log(myLovelyString.length)
// // console.log(myLovelyString.indexOf("good"))
// // console.log(myLovelyString.lastIndexOf("good"))


// //console.log(myLovelyString.slice(1,4)
// d = myLovelyString.replace("Harry", "Rohan");
// //d =d.replace ("good", "bad");
// //console.log(d, myLovelyString)

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// //DOM Manipulation
// let elem = document.getElementById('click');
// // console.log(elem);

// let elemClass = document.getElementsByClassName("container")
//console.log(elemClass);
//elemClass[0].style.background = "Yellow";
//elemClass[0].classList.add("bg-primary")
//elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

//console.log(elem.inner[0].innerHTML)
//console.log(elem.inner[0].innerText)


// Correctly selecting elements by tag name
// let tn = document.getElementsByTagName('div');
// //console.log(tn);

// // Creating a paragraph element
// let createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// // Creating a bold element
// let createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// // Remove an element using removeChild
// // Example: tn[0].removeChild(createdElement2);

// // Selecting using Query
// sel = document.querySelectorAll('.container');
// console.log(sel);

// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked')
// }
// //  window.onload = function() {
//     console.log('The document was loaded')
//  }
// // Events in javascript
// // fristContainer.addEventListener('click' , function() { 

// //       console.log("Clicked on Container")[1].innerHTML  = "<b> we have clicked</b>"

// //       console.log("clicked on  Container")
// // })  



// // fristContainer.addEventListener('mouseout' , function() { 

// //       console.log("Mouse out of  Container")
// // })

// // fristContainer.addEventListener('mouseup' , function() { 

// //       console.log("Mouse up when clicked on  Container");
// // })

// let prevHTML = document.querySelectorAll(' .container')[1].innerHTML;
// fristContainer.addEventListener('mouseup' , function(){ 

//     console.log('Mouse up when clicked on  Container')[1].innerHTML = prevHTML;
// })


// fristContainer.addEventListener ('mousedown' , function() {

//     console.log("Mouse down when clicked on  Container");


// })

// setTimeout and setInterval


//Arrow Functions
function summ(a, b) {

    return a + b;
}
summ = (a, b) => {
    return a + b;
}
logKaro = () => {
    document.querySelectorAll(' .container')[1].innerHTML = "<b>  set interval fired  </b>"
    console.log("I am  your log")
}

//SetTimeout and setinterval
//clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//JavaScript localStorage
// localStorage.setItem('name' , 'ashfaque')
// localStorage
// localStorage.getItem('name')
// localStorage.clear();


// json
// obj = {name:"ashfaque" , length: 1, a:{this :'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse(`{"name":"ashfaque","length":1,"a":{"this":"tha\\"t"}}`)

//    console.log(parsed);

//Template litrals  - Backticks
a = 34;
console.log(`this  is my ${a}`)



