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

// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean("")) // false

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
//
// // by valuses
// var a = 3;
// var b = a;
//
//
// var a = 5;
//
// console.log(a);
// console.log(b);
//
// // by reference (all objects)
//
// var c = {
//     greeting: "Hello"
// };
// var d;
//
// d = c;
//
// console.log(c);
// console.log(d);
//
// c.greeting = "Hi there"; // mutate
//
// console.log(c);
// console.log(d);
//
// // by reference (even as parameters)
//
// function changeGreetings(obj){
//     obj.greeting = "Holla";
// }
//
// changeGreetings(d);
//
// console.log(c);
// console.log(d);
//
// // equals operator sets up new memory space (new address)
// c = {
//     greeting:'Bubble'
// };
//
// console.log(c);
// console.log(d);
//
//
//
// function a(){
//     console.log(this);
//     this.newvariable = 'hello';
//     console.log(newvariable);
//
// }
//
// var b = function(){
//     console.log(this);
// }
// a();
// b();
// console.log(newvariable);
//
// var c = {
//     name: "The c object",
//     log: function() {
//         var self = this
//         self.name = "Updated c object"
//         console.log(self);
//
//         var setname =function(newname){
//             self.name = newname;
//         }
//         setname('Updated againe !!');
//         console.log(self);
//     }
// }
//
// c.log();
//
//
//
// var arr = [1, 2, 3];
//
//
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];
//
// console.log(a);
// console.log(b);
// console.log(c);
//
// var arr = [
//     1,
//     false,
//     {
//         name: "Tony",
//         address: "Reading"
//     },
//     function(name) {
//         var greeting = 'Hello ';
//         console.log(greeting + name);
//     }
//
// ];
//
// console.log(arr);
// arr[3](arr[2].name);
//
//
// var foo = [
//     1,
//     2,
//     {
//         name: "Hello Moto"
//     },
//     function(name) {
//         console.log(name);
//     }
// ];
//
// foo[3](foo[2].name);
//
// // console.log(foo);
//
//
// function greet(firstname, lastname, language){
//     firstname = firstname || "john"
//     lastname = lastname || "Smith"
//     language = language || "English"
//     if (arguments.lenght === 0){
//         console.log('Missing parameters!')
//         console.log('---------------')
//     }
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments);
//     console.log('Argument 0 is: '+arguments[0]);
//     console.log(firstname+" "+lastname+" "+language);
//     console.log("-----------");
// }
// function greetWithoutParameters(firstname, lastname, language){
//
//     if (arguments.length === 0){
//         console.log('Missing parameters!');
//         console.log('---------------');
//         return;
//     }
//     else{
//         console.log(firstname);
//         console.log(lastname);
//         console.log(language);
//         // console.log(arguments);
//         console.log(firstname+" "+lastname+" "+language);
//         console.log("-----------");
//     }
//
// }
//
//
//
// greet();
// greet("Pawel","Siwek","Polish");
// greetWithoutParameters("Pawel","Siwek","Polish");
// greetWithoutParameters();
//
//
// function greet(firstname, lastname, language){
//     language = language || 'eng';
//
//     if ( language === 'eng') {
//         console.log('Hello ' + firstname +' '+ lastname);
//         console.log('---------------------');
//
//     }
//     if ( language === 'es' ) {
//         console.log('Holla ' + firstname +' '+ lastname);
//         console.log('---------------------');
//     }
// }
//
// greet('john','Smith','eng');
// greet('john','Smith');
// greet('Hoolio','Rodriguez','es');
//
//
// function greetEnglish(firstname, lastname){
//     greet(firstname, lastname, 'eng');
// }
// function greetSpanish(firstname, lastname){
//     greet(firstname, lastname, 'es');
// }
//
// greetEnglish("john","Smith");
// greetSpanish("Amigo","Julio");


// Syntax parser is part of Javascript engine.

//
//
//
// function getPerson1() {
//     return //SYNTAX PARSER adds semilocon but shouldn't
//     {
//         firstname: 'Tony'
//     }
// }
// console.log(getPerson1());
//
//
//
//
// function getPerson() {
//     return {
//         firstname: 'Tony'
//     }
// }
//
// console.log(getPerson());
//
//
// var firstname,
//
//
//
//     //some comments
//     lastname,
//     // Another comment
//     language;
//
//
//
// var person = {
//     // Object Literal comments
//     //Gap
//
//
//     //Gap
//     firstname: "john",
//     // JavaScript doesn't care about white spaces
//     lastname: 'Smith'
// }
//
// console.log(person);
// console.log(person.firstname);
// console.log(firstname);



//Function Statment
// function greet(name) {
//     console.log('Hello ' + name);
// }
// greet('Oskar');
//
// // Function Expression
// var FunctionExpression = function(name) {
//     console.log('Hello ' + name);
// };
//
// FunctionExpression('Oskar');
//
// // Useing an Immediately Invoke Function Expression (IIFE)
//
// var greety = function(name) {
//     name = name || 'Oskar'
//     console.log('Hello ' + name);
// }('Edward'); // () makes Function Expression an IIFE
// var name = 'Victor'
//
// var greety = function(name) {
//     name = name || 'Oskar'
//     console.log('Hello ' + name);
// };
//
// greety('Victor');
//
// {
//     name: 'john'
// }
//
// // In this way function sits in memeory without corsing errors and is runned on the go.
// var firstname = 'Malcolm';
// (function(name) {
//     var greeting = 'Hello from inside IIFE';
//     console.log(greeting + ' ' + name);
// }(firstname));

//
// (function(global, name) {
//     global.greeting = 'Hello from inside IIFE !! ';
//     console.log(greeting + ' ' + name);
// }(window,'Malcolm'));
//
// console.log(this);
//
// this.carMake = 'Audi'

// function greet(whattosay) {
//
//     return function(name) {
//         console.log(whattosay + ' ' + name);
//     }
//
// }
// greet('Hi')('Tony');
//
//
//
// var sayHi = greet('Hi');
//
// sayHi('Tony');
// function bildFunctions(){
//
//     var arr= [];
//     for (var i = 0; i < 3; i++);
// };
//
//
// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }
//
// console.log(makeAdder(5)(7));
//
// var add5 = makeAdder(5);
// var add15 = makeAdder(15);
// console.log(add5(5));
// console.log(add15(5));
//
// var add55 = add5(5);
//
// console.log(add55 + 3);
//
// function builderFunction(){
//
//     var arr = [];
//
//     for (var i = 0;i < 3; i++){
//         arr.push(i)
//     }
//     return arr;
// }
//
// console.log(builderFunction());
//---------------------------------------------
//
// function builderFunction1(){
//
//     var arr = [];
//
//     for (var i = 0;i < 3; i++){
//         arr.push( function(){
//             console.log(i);
//         });
//     }
//     return arr;
// }
// var arrF = builderFunction1();
//
// arrF[0]();
// arrF[1]();
// arrF[2]();
//
// function builderFunction1(){
//
//     var arr = [];
//
//     for (var i = 0;i < 3; i++){
//         arr.push( function(j){
//             console.log(i);
//         }(i)); // whit function trigger
//     }
//     return arr;
// }
// var arrF = builderFunction1();
//
// arrF[0];
// arrF[1];
// arrF[2];
//
//
//
// function makeGreeting(language){
//
//     return function(first,last){
//         if( language === 'en'){
//             console.log('Hello '+ first +' '+ last);
//         }
//         if( language === 'es'){
//             console.log('Holla '+ first +' '+ last);
//         }
//     }
// }
//
// var langEn = makeGreeting('en');
// var langEs = makeGreeting('es');
//
// langEn('john','Smith');
// langEs('Julio','Rodrigues');
//
//

// function sayHiLater(){
//
//     var greeting = 'Hi';
//      setTimeout(function(){
//          console.log(greeting);
//      }, 3000 );
//
// }
//
//
// sayHiLater();
//object
// var person = {
//     firstName: 'john',
//     lastName: 'Smith',
//     //function
//     getFullName: function() {
//         var fullname = this.firstName + ' ' + this.lastName;
//         // this. must be in a function(method) in a obj to point to this obj.
//         return fullname;
//     }
// }
// //
// // 1 .bind()
// //
// var logName = function(lang1, lang2) {
//     console.log('logged:' + this.getFullName()); // this. points global obj
// }
// var logPersonName = logName.bind(person); // .bind(person) points 'this.' to 'person' object.
// logPersonName();
//
// // 2 .bind()
// var logName = function(lang1, lang2) {
//     console.log('----------------')
//     console.log('logged:' + this.getFullName()); // this. points global obj
//     console.log('Arguments: '+ lang1 +' '+ lang2)
// }.bind(person); // .bind(person) points 'this.' to 'person' object.
// logName('English','Spanish');
//
//
//
// //3 .bind()  'Currying'
// function multi(a,b){
//     return a*b;
// }
// var multiByTwo = multi.bind(this,2); // .bind(this) sets pernament for first argument in copy of a function stored in 'multiByTwo'.
// var multiBy = multi.bind(this,2,3); // .bind(this) sets pernament for first and second argument in copy of a function stored in 'multiBy'.
//
// console.log(multiByTwo(4));
// console.log(multiBy());
//
// //
// //.call()
// //
//
// var logName = function(lang1, lang2) {
//     console.log('----------------')
//     console.log('logged:' + this.getFullName()); // this. points global obj
//     console.log('Arguments: '+ lang1 +' '+ lang2)
// }
//
// logName.call(person,'English','Spanish'); // .call(person...) points 'this.' to 'person' object.
//
// //
// // .apply()
// //
//
// logName.apply(person,['Polish','German']); // .apply(person...) points 'this.' to 'person' object. Arguments need to be in [square] brackets!!!
//
//
// (function(lang1, lang2) {
//     console.log('----------------')
//     console.log('logged:' + this.getFullName());
//     console.log('Arguments: '+ lang1 +' '+ lang2)
// }).call(person,'Russian','Lithuenian') // invokes immediately anonymous function pointing 'this' on obj. 'person' with two arguments.
// var person2  = {
//     firstName: 'Samantha',
//     lastName: 'Jones'
// }
//
// var fullNamep2 = person.getFullName.apply(person2); //Takes function 'getFullName' from person and point 'this' on person2 for 'firstName','lastName'.
//
// console.log(fullNamep2);


// var arr1 = [1, 2, 3, ];
// console.log(arr1);
//
// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

//
// function mapForEach(arr, fn) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(
//             fn(arr[i])
//         )
//     };
//     return newArr;
// }
//
// function multi(a) {
//     return a * 5;
// }
//
// var arrX = [2, 3, 5, 6];
//
// var arrx2 = mapForEach(arrX, multi);
// console.log(arrx2); // (4) [10, 15, 25, 30]
//
// //
// function greater(a) {
//     return a > 20;
// }
//
// var greaterThanResult = mapForEach(arrx2, greater);
// console.log(greaterThanResult); //  (4) [false, false, true, true]
//
//
// function greaterThanLimiter(limiter,item){
//     return limiter <= item;
// }
//
// var arr4 = mapForEach(arrx2,greaterThanLimiter.bind(this,25));
// console.log(arr4);
//
// var greaterThanSimply = function(limiter){
//     return function(limiter, item){
//         return limiter <= item;
//     }.bind(this,limiter);
// };
//
// var arr5 = mapForEach(arrx2,greaterThanSimply(10));
// console.log(arr5);
//
// console.log(greaterThanSimply(10)(15));
// console.log(mapForEach(arrx2,greaterThanSimply(10)));
//
//





//// Underscore.js

//
// var arr = {
//     adress:'Kings Road',
//     town:'reading',
//     sfsd:'reading',
//     todfwn:'reading',
//     towfdsn:'reading',
//     toewn:'reading',
// }
//
// var arrValue = _.values(arr);
//
// console.log(arrValue[0]);
//
// console.log(_.map(arrX,function(item){ return item * 3}));
//
// var arr7  = _.filter([2,3,4,5,6,7,8,9,22], function(item){return item % 2 === 0});
//
// console.log(arr7);
//
//
// function col(value){
//     console.log(value);
// }
//
// col(arr7);

var person = {
    firstname: 'Defult',
    lastname: 'Defult',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}
console.log(person);

var john = {
    firstname: 'john',
    lastname: 'Smith'
}

john.__proto__ = person;

console.log(john.getFullName());
 var jane = {
     firstname:'Jane'
 }

jane.__proto__= person;

console.log(jane.getFullName());

for(var prop in john){
    if (john.hasOwnProperty(prop)){
    console.log(prop + ':' + john[prop]);
}
}




var jane = {
    address: '111 mian str',
    getFullName: function(){
        return this.lastname + ', '+ this.firstname;
    }
}
var jim = {
    getFirstName: function(){
        return this.firstname;
    }
}


_.extend(john,jane,jim);

console.log(john);


var johnfullName = john.getFullName();
var johnFirstName = john.getFirstName();

console.log(johnfullName);
console.log(johnFirstName);

console.log(Object(john) + ' <-----');


// !!!!

_.extend = createAssigner(_.allKeys);

var createAssigner = function(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length; //  checking lenght of arguments and assighn result to var lenght


    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;

    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;

      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
};

_.allKeys = function(obj) {
  if (!_.isObject(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys);
  return keys;
};

_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};


// !!!!





///
