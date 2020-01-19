// declare and initialise a variabel
var home = "tv";
console.log(home);

//make a object var called person and give it two properties one key and one string
var key = "name";
        var person = {};
        person[key] = "john";
        console.log(person);

//create a variable called out off stock and assign it to a boolean
var outOfStock = true
if(outOfStock === true){
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

//create an array of five numbers and run a loop trough the array
var numbers =[4, 40,3, 60, 100];
for (var i=0; i< numbers.length; i++) {

console.log(numbers[i]);
}

//create a for loop that loops trough the number 15 to 25 and consol log it
for (var count = 15; count <= 25; count++) {
  console.log(count);
}

//using the same loop as number 5 only log the value of the counter if its equal to 20
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

//create an array of 2 object each object must have the same three properties
var car =[3, "bentley", true];
console.log(car[0]);
console.log(car[2]);

//create a function and accept one argument
function whatIDontLike(avocado){
  console.log("i don't like " + avocado);
}
whatIDontLike("avocado");

//make a variabel that axepts two argument
function twonumber(one, two){
  var sum = one - two;
  console.log(sum);
}
twonumber(1440, 345);



// create an empty array and make a function with one argument
var movie = []
function bestmovie(best){
movie.push(best);
}
bestmovie("avengers");
console.log(movie);