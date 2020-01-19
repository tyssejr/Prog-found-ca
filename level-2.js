//using the loop from question 5 above, only log the counter variabel if it is an even number
for (var count = 15; count <= 25; count += 2) {
    console.log(count);
}
//question 2
function myfuncy(){
    console.log("i am a function");
}
var innerFunction = myfuncy

function outerFunction(hello){
    console.log("hello");
}
outerFunction(innerFunction);
