var currentScope = 0; // global scope
function a() {
    var currentScope = 1,
        one = 'scope1';
    console.log(currentScope);
b();
    function b() {
        var currentScope = 2,
            two = 'scope2';
        console.log(currentScope);
c();
        function c() {
            var currentScope = 3,
                three = 'scope3';
            console.log(currentScope);
            console.log(one +" "+ two +" "+ three); // climb up the scope chain to get one and two
        };
    };
};
a();

//
// function b(){
//     c();
//     function c(){
//         d();
//         function d(){
//
//         }
//     }
//     // console.log(myVar);
// }
// function a(){
//     var myVar = 2;
//     // console.log(myVar);
//     b();
// }
//
// var myVar = 1;
// // console.log(myVar);
// a();
// console.log(myVar);


// var a ="Hello World";
//
// console.log(a);
