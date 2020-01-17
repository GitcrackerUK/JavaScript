



function b(){
    c();
    function c(){
        d();
        function d(){
            console.log(myVar);
        }
    }
    // console.log(myVar);
}
function a(){
    var myVar = 2;
    // console.log(myVar);
    b();
}

var myVar = 1;
// console.log(myVar);
a();
// console.log(myVar);


// var a ="Hello World";
//
// console.log(a);
