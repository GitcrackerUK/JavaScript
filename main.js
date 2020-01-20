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
// var person = new Object();
// person["firstName"]="Tony";
// person["secondName"]="Smith";
// var firstNameProperty = "firstName"
// console.log(person);
// console.log(person.firstName);
//
//
// var employee = new Object();
// employee["firstName"]="Pawel";
// employee["secondName"]="Chryc";
// employee["Gender"]="male";
// employee["Height"]="184";
// employee["Weight"]="90";
// employee["Nationality"]="Polish";
// employee["Hair"]="Brown";
// employee["Hair"]="Brown";
//
// var heightValue ="Height";
//
// console.log(employee[heightValue]);
//
// var weighValue = "Weight";
//
// console.log(employee[weighValue]);
//
// console.log(employee.Hair);
//
// employee.age="34";
//
// console.log(employee.age);
//
// console.log(employee);
//
// employee.workType = "Accountant"
//
// console.log(employee);
//
// delete employee.workType;
//
// employee["Work Type"]="Accountant";
//
// console.log(employee);
//
// employee.address
// console.log(employee);
//
// employee["Work Expirience"]="10 years";
//
// var work = {};
//
//
//
// console.log(work);
//
//
// work = { type:"heavy lifting",
//         location:"Rading",
//         address:{
//             street:"kings",
//             town:"Reding",
//             postCode:"rg1 1rg",
//         }
// }
// console.log(work);
//
//
// work.type["Human Resoces"];
//
// console.log(work);
//
// //1.  []
//
// var person = new Object();
//
// person["firstname"] = "Tony";
// person["lastname"] ="Smith";
//
// var firstNameProperty = "firstname";
//
// var objPerson = person;
// var objPersonName = person.firstname;
//
// console.log(person);
// console.log(person[firstNameProperty]); // [] extracts value from varible
// console.log(person.firstname);
// console.log(objPerson);
// console.log(objPersonName);
// console.log(person.firstname);
// console.log(person.firstname);
// console.log(person.lastname);
//
//
// // 2   .
// person.lastname = new Object();
// person.lastname.surname = "Smith";
// person.lastname.mothersname = "Jones";
//
//
// var person = {
//     firstname: "",
//     lastname: "",
//     age: "",
//     address: {
//         street: "",
//         town: "",
//     }
// };
//
//
// var Tony = {
//     firstname: "Tony",
//     lastname: "Smith",
//     age: "34",
//     address: {
//         street: "Main Street",
//         town: "Luton",
//     }
// };
// console.log(person);
//
// function greet(person) {
//     console.log("Hi " + person.firstname + ".");
// }
//
// greet(Tony);
//
// greet({
//     firstname: "Marry",
//     lastname: "Doe"
// });
// Tony.address2 = {
//     street: "Broad Street",
//     Town: "London"
// }
//
// function address(person) {
//     console.log("Your address is:\n" + person.address.street + "\n" + person.address.town);
// }
// address(Tony);
//
// var greet = "Hello!";
// var greet = "Holla";
//
// // console.log(greet);
//
// var english = {};
// var spanish = {};
//
// english.greet = "Hello!"
// spanish.greet = "Hola!"
//
// console.log(english);
// console.log(spanish.greet);

//
// var objectLiteral = {
//     firstname:"Mary",
//     secondname:"Magdalena",
//     isAProgrammer:true
// }
//
//
// console.log(JSON.stringify(objectLiteral));
//
// var jsonValue = JSON.parse('{"firstname":"marry","secondName":"Smith"}');
//
// console.log(jsonValue);

// greet();
//
// function greet(){
//     console.log("hi");
// }
//
// greet.language ="English";
//
// greet();
// console.log(greet.language);
// var greetLanguage = greet.language;
// console.log(greetLanguage);
//
// console.log(greet);
//



// greet();
//
//
// //FUNCTION STATMENT
// function greet(){
//     console.log("hi");
// }
// //FUNCTION EXPRESSION
// var anonymousGreet = function(){
//     console.log("Hello!");
// }
//
// anonymousGreet();
//

// function log(a){
//     console.log(a);
// }
// log(3);
// log("Hello");
//
// log({
//     greeting: "Hi"
// });
//
// function logrun(a){
//     a();
// };
//
//
// logrun(function(){
//     console.log('Runned function in a function by setting a(); in first function and console.log(); in second/this' );
// });
//
//

// by valuses
var a = 3;
var b = a;


var a = 5;

console.log(a);
console.log(b);

// by reference (all objects)

var c = {
    greeting: "Hello"
};
var d;

d = c;

console.log(c);
console.log(d);

c.greeting = "Hi there"; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreetings(obj){
    obj.greeting = "Holla";
}

changeGreetings(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = {
    greeting:'Bubble'
};

console.log(c);
console.log(d);









//
