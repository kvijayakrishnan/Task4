
// Task 1 Simple Programs todo for variables


//1. Declare four variables without 
// assigning values and print them in console
var a;
a = "welcome";
console.log(a);

let c;
c = "hello guvi";
console.log(c);

const x = "hello world";


// 2. How to get value of the variable myvar as output
var myvar=1;
console.log(myvar);

// 3. Declare variables to store your first name, 
// last name, marital status, 
// country and age in multiple lines

let firstname = "vijay";
console.log("first name");
let lastname = "krishnan";
console.log("last name");
let maritalstatus = "single";
console.log("martial status");
let country = "india";
console.log("country");
let age = 30;
console.log("age");

// 4. Declare variables to store your first name,
//  last name, 
// marital status, country and age in a single line
let firstname1 = "priya";
let lastname1 = "devi";
let maritalstatus1 = "yes";
let country1 = "USA";
let age1 = 25;
let person1 = (firstname1 +  +lastname1 + +maritalstatus1 + + country1 + +age1);
console.log("person1");


// 5. Declare variables and assign string, boolean, undefined and null data types
//assign string
let age3 = "I am 25 years oldd";
let age13=  "You are 30 years old";
//boolean type
if (age < 18){
    console.log("i am 25 years oldd");
}else
if (age > 18){
    console.log("you are 30 years old");
};

//undefined 
let age0;
console.log("age");
let age10;
console.log("age10");

// null
let x = null;
let x = ("i am 25 years oldd");
x = null;

//6.Convert the string to integer
//parseInt()
parseInt("10");
parseInt("10.00");
parseInt("10.33");
parseInt("34 45 66");
parseInt("   60   ");

//Number()
Number("true"); 
Number("false"); 
Number("new Date()");

//Plus sign(+)
let y = 5;
let x1 = y + 2;
console.log(x1);

//7. Write 6 statement which provide truthy & falsey values

//The following values are always falsy:
//false
//0 (zero)
//-0 (minuszero)
//0n (BigIntzero)
//'', "", `` (emptystring)
//null
//undefined
//NaN

//Everything else is truthy. That includes:

//'0' (a string containing a single zero)
//'false' (a string containing the text “false”)
//[] (an empty array)
//{} (an empty object)
//function(){} (an “empty” function)

// task 2 Simple Programs todo for Operators

//i) Square of a number:

let num = (2 ** 4);
console.log(num); // 16



//ii) Swapping 2 numbers:

//JavaScript program to swap two number

//take input from the users
let a = int('Enter the first value: ');
let b = int('Enter the second value: ');

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//Enter the first value: 4
//Enter the second value: 2
//The value of a after swapping: 2
//The value of b after swapping: 4



// iii) Addition of 3 numbers

const num1 = 5;
const num2 = 3;
const num3 = 2;

// add three numbers
const sum = num1 + num2 + num3;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + 'and ' + num3 +  ' is: ' + sum);



 //iv) Celsius to Fahrenheit conversion

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}
console.log(cToF(36))


//5.)Meter to miles

// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

//6.)Pounds to kg
function convertPoundToKg(){
	var input = document.getElementById('pounds1').value;
 
	if(input != ""){
		var pounds = parseFloat(input);
		document.getElementById('kilograms1').value = pounds / 2.205;
	}else{
		alert("Required filed must not be empty");
		document.getElementById('kilograms1').value = "";
	}
}


//7.)Calculate Batting Average

let runs = 10000;
let matches = 250;
let notout = 50;
let avg = averageRuns(runs, matches, notout);
 
if (avg == -1){
    console.log("NA");
}
else{
    console.log(avg);
}



//8.)Calculate five test scores and print their average

var students = [['tamil', 80], ['english', 77], ['maths', 88], ['science', 95], ['social', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log( (Avgmarks)/students.length);


//9.)Power of any number x ^ y.

var b, e, r;
    
// b = base
// e = exponent
// r = result

b = 8;
e = 4;

// finding power of base value by equiping exponent value
r = Math.pow(b, e);

document.write("Result:: " + b +"^" + e + " = " + r )


//10.)Calculate Simple Interest

var p, t, r, SI;
    
// p = principal
// t = time
// r = rate
// SI = simple interest

// Calculate simple interest
p = 15;
t = 12;
r = 12;

SI = (p * t * r) / 100;

// Output
console.log("Simple Interest = " + SI);


// 11.)Calculate area of an equilateral triangle

const a = 5;
const equilateral_triangle_area = Math.sqrt(3) / 4 * (a * a);  
    console.log("Equilateral Triangle Area = " + equilateral_triangle_area); 


   //12.) Area Of Isosceles Triangle 
    const perimeter = 500;
 const almostIsosceles = (perimeter = 0) => {
 let a = perimeter;
 for(; a > 0; a--){
        for(let b = perimeter; b > 0; b--){
            for(let c = perimeter; c > 0; c--){
 
                if(a + b + c > perimeter || a !== b + 1 || (Math.pow(a, 3) - Math.pow(b, 3) !== Math.pow(c, 2))){
 
                    continue;
                };
                return [a, b, c];
            };
        };
    };
    return [];
};
console.log(almostIsosceles(perimeter));


//13.)Volume Of Sphere
let radius = 5;
let volume = (4/3)* Math.PI * Math.pow(radius, 3);

console.log('Volume of Sphere: '+volume.toFixed(2));


//14.)Volume Of Prism
function findVolume( b, h)
{
 
    // formula to find Volume
    let volume = ( b * h);
 
    return volume;
}
 
// Driver Code
  let  b = 12, h = 9;
 
    // function calling
    console.log( "Volume of  prism: " + findVolume(b, h));


// 15.)Find area of a triangle.

 const baseValue = ('Enter the base of a triangle: ');
const heightValue = ('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);



