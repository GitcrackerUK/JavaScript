//
//
//
// var a="hi";
// if (a){
//
//     console.log("Hello World")
//
// }
// // console.log(a);
// var a ;
//
// a= 3 == "3"
// console.log(a);
//
// var b;
//  b=3 ==="3"
//  console.log(b);

// var a = 0;
// var b= false;
// if (a==b ){
//     console.log("They are equal!")
// }
//
// else{
//     console.log("They aren't!")
// }
//
// if (a===b ){
//     console.log("They are equal!")
// }
// else{
//     console.log("They aren't!")
// }
// if (a!==b ){
//     console.log("They are not equal!")
// }
// else{
//     console.log("They aren't!")
// }






//
//
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean("")) // false









//


// var a = null;
// var a = undefined;
// var a = false;
// var a = true;
// var a = "";
// if(a){
//     console.log("Something is there!!");
// }
// else {
//     console.log(" 'a' is undefined");
// }
//
//
// // undefined === null === false
//
//
// console.log(undefined == null); //true
// console.log(null == false);//false
// console.log(undefined == false);//false
// console.log(0 == false);//true

// console.log(Boolean(0)); //false
// console.log(Boolean(111)); //true
//
// var a;
// a = 0;
// if (a || a === 0) {
//     console.log("Something is there!");
// }






//
// function greet(name){
//     console.log("Hello " + name);
// }
// // var name = "Tony"
//
// greet();
// greet(name);

// Operator "or" prioritaize value "true" and all valuses which can be coerced to true like "1"
// list of outputs from || "or".
// console.log(true || false); //true
// console.log(false || "hi"); // "hi"
// console.log("hello" || "hi"); // "hello"
// console.log(undefined || "hi"); // "hi"
// console.log(null || "hi"); // "hi"
//

// function greet(name){
//     name = name || "<Your name here!!>";
//     console.log("Hello " + name);
//
// }
//
//
// greet("Tony");
// greet();
//
// var home;
// home = 1
// home = "var"
// window.personalbar.visible = false
// name = null
// // console.log( home || "string"); //var
// console.log(window);
// var wd =(window.screen.availWidth);
// var hg =(window.screen.availHeight);
// var pb = false || 4456;
// console.log(wd);
// console.log(hg);
// console.log(pb);
//
// function divided(x,y){
//     var x;
//     var y;
//     console.log(x/y);
// }
// divided(hg,wd);
// divided(wd,hg);
// console.log(window.personalbar.visible);


//
// var person = new Object();
//
// person["firstName"] = "Tony";
// person["lastName"] = "Smith";
//
// var firstNameProperty = "firstName";
//
// console.log(person.firstName);
//
// var person = {}; // creating new object
// console.log(person);
//
// person = {
//     firstname: "Tony",
//     lastname: "Smith"
// };
//
//
// person.address="Kings Road";
//
// console.log(person);
var person = new Object();
person["firstName"]="Tony";
person["secondName"]="Smith";
var firstNameProperty = "firstName"
console.log(person);
console.log(person.firstName);


var employee = new Object();
employee["firstName"]="Pawel";
employee["secondName"]="Chryc";
employee["Gender"]="male";
employee["Height"]="184";
employee["Weight"]="90";
employee["Nationality"]="Polish";
employee["Hair"]="Brown";
employee["Hair"]="Brown";

var heightValue ="Height";

console.log(employee[heightValue]);

var weighValue = "Weight";

console.log(employee[weighValue]);

console.log(employee.Hair);

employee.age="34";

console.log(employee.age);
