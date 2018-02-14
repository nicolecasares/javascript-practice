// var negInteger = -3.14159265359;
// var escQuote = "Quotes can also be \"escaped\".";
// var theSunIsWarm = true;
// var emptyInside = null;
// var justAnotherVariable;

// // Try this in your console:
// // console.log(typeof insertVariableName);

// var array = ['apple', 'grapes', 'oranges', 'pinapple'];

// console.log(array);

// console.log(array.push('mango')); 
// // push adds an element to the end of an array 

// console.log(array);


// console.log(array.unshift('cake'));
// //unshirft adds an element to the begining of an array

// console.log(array);

// console.log(array.pop());
// //pop delets the element at the end of the array 

// console.log(array);

// console.log(array.shift());
// //shift delets the element at the beinging 

// console.log(array);

// console.log(array.indexOf('grapes'));






// if(array.indexOf('apple')===0){
// 	console.log('nicole is an apple finatic');
// }else{
// 	console.log('nicole thinks apples are only ok');
// }



// var hermine = {
// 	name: 'Hermine',
// 	house: 'Grifindor',
// 	bae: 'Ron',
// 	age: 30,
// 	badAss: true,
// };

// console.log(hermine);

// console.log(hermine['bae']);

// hermine.bae = 'Nicole';

// console.log(hermine['bae']);



// // var person = {name:"John", age:50};
// // document.getElementById("demo").innerHTML = 
// // person.name + " is " + person.age + " years old.";


// document.getElementById('demo').innerHTML = hermine.name + ' is ' + hermine.bae + '\'s' + ' lover'; 



// var nicole = {
// 	firstName: 'Nicole',
// 	lastNAme: 'Casares',
// 	birthDate: new Date(1989, 7, 5)
// };

// console.log(nicole.birthDate.getFullYear());





// // var someStuff = [1,4,2,6,5,3,6 ]; 
// var someStuff = [40, 100, 1, 5, 25, 10];


// document.getElementById('demo').innerHTML = someStuff;

// 	document.getElementById('alphabet').addEventListener('click', function(){
// 		someStuff.sort();
// 		document.getElementById('demo').innerHTML = someStuff;
// });

// document.getElementById('demo').innerHTML = someStuff;

// 	document.getElementById('numbers').addEventListener('click', function(){
// 		someStuff.sort(function(a,b){
// 			return a - b;
// 		});
// 		document.getElementById('demo').innerHTML = someStuff;
// });




// // Write a function named greaterNum that:
// // takes 2 arguments, both numbers.
// // returns whichever number is the greater (higher) number.
// // Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").



// function greaterNum(a, b){
// 	if (a > b){
// 		return a;
// 	}else{
// 		return b;
// 	}
// };

// console.log(greaterNum(3,5));

// console.log(greaterNum(9,10));


// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


// function helloWorld(a){
// 	if (a == 'es'){
// 		return 'Hola Mundo';

// 	}else if (a == 'germ'){
// 		return 'Hallo Welt';
// 	}else{
// 		return 'Hello World';
// 	}
// }

// console.log(helloWorld('es'));

// console.log(helloWorld('germ'));

// console.log(helloWorld('eng'));



// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function assignGrade (a){
// 	if(a > 90){
// 		return 'A';
// 	} else if(a >= 80){
// 		return 'B';
// 	} else if(a >= 70){
// 		return 'C';
// 	} else if(a >= 60){
// 		return 'D'
// 	} else{
// 		return 'F';
// 	}


// }

// console.log(assignGrade(80));
// console.log(assignGrade(70));
// console.log(assignGrade(97));
// console.log(assignGrade(3));


// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// function pluralize(a, b){

// }


// for(i=0; i=15; i--){
// 	console.log(i);
// }


// total = 0;


// for(var i=1; i<15; i++){
// 	total += i;
// };

// console.log(total);

// var sisters = [28, 25, 32]

// for (var i=0; i < sisters.length ; i++){
// 	console.log(sisters[i]);
// }

// var i;
// var text = '';

// for (i = 1; i < 10; i += 2){
// 	text += i + ' ';
// }

// console.log(text);




// for (i = 1; i < 10; i = i + 2) {
//     text += i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


function tellFortune(numChildren, partnerName, location, job) {
	console.log('You will be a ' + job + ' in ' + location + ', and married to ' + partnerName + ' with ' + numChildren + ' children.');

}

tellFortune(3, 'Anthoney', 'LA', 'Developer');
tellFortune(0, 'Lilly', 'Mumbi', 'Artiest');
tellFortune(8, 'no one', 'Canada', 'Banker');




function calculateDogAge(humanAge){
	var dogAge = humanAge * 7;
	console.log('Your dog is ' + dogAge + ' in doggie years.');
}

calculateDogAge(4);
calculateDogAge(8);


function calculateSupply (age, poundsPerDay, snack ){
	var maxAge = 85;
    var supplyNeeded = (maxAge - age) * (poundsPerDay * 365);
    console.log('At the age of '+ age + ', you need ' + supplyNeeded + ' pounds of ' + snack + ' to survive to ' + maxAge + '.' );
}

calculateSupply(28, 1, 'carrots');
calculateSupply(40, .2, 'chocolate');
calculateSupply(56, .85, 'biscuits');

















































