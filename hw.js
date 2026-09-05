let age = 15; 
console.log("age:", age);

let name = "Denys"; 
console.log("name:", name);

let isStudent = true; 
console.log("isStudent:", isStudent);

let myString = "Краще плисти проти течії, ніж віддатися їй";
console.log("myString:", myString);

let myNumber = 5;
myNumber = myNumber + 10; 
console.log("myNumber:", myNumber);


let myNull = null;
console.log("myNull:", myNull);


let userName = prompt("Введіть своє ім'я");
alert("Привіт, " + userName);
console.log("userName:", userName);
console.log("Тип userName (typeof):", typeof userName); 

let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log("userAnswer:", userAnswer);

alert("Увага! Дія може бути небезпечною.");
let confirmAction = confirm("Ви впевнені, що хочете продовжити?");
if (confirmAction) {
  console.log("Дія підтверджена користувачем.");
} else {
  console.log("Користувач скасував дію.");
}