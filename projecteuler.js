let list = [];
let result = 0;
function creatBigList(){
  for(i=0;i<1000;i++){
  list.push(i);  
 }
}
creatBigList();
// console.log(list);
// Find numbers divided by 3,5
let numbersFound = [];
function findNumbers(){
//   loop over the list
  for(i=0;i<list.length;i++){
    //find multiplyed by 3 or 5 
    if(i%3===0 || i%5===0){
      //   add to "NumbersFound" & sum
       numbersFound.push(i);
       result += i
       }
    // else if {
    //       numbersFound.push(i);
    //      result += i
    //    }
   }
}
findNumbers();
console.log(numbersFound);
console.log(numbersFound.length);
console.log(result);
