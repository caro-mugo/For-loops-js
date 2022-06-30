// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for ( var y = 1; y <= 100; y++ )
{
  if ( y%3 === 0 && y%5 === 0 )
  {
    console.log( y + " FizzBuzz" );
  }
  else if ( y%3 === 0 ) 
  {
    console.log(y+ " Fizz" );
  }
  else if ( y%5 === 0 ) 
  {
    console.log(y+ " Buzz" );
  }
  else
  {
    console.log(y);
  }
}
//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var z = 0; z < 1000; z++)
{
    if (z % 3 === 0 || z % 5 === 0)
    {
       sum += z;
    }
}
console.log(sum);
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (var x=0; x<=20; x++) {
    
   if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else{
            console.log(x + " is odd");
    }
}

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
a=-2;
b=4;
c=-5;
d= 6;
e=0;
if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
}
// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
a=10;
b=40;
if(a>b ){
    console.log(a)
}
else if (b>a){
    console.log(b)
}
else{
    console.log (c)
}
// Write a JavaScript program to find leap years from 2000 to 2022
function leap_year(first_year, last_year) {
    var year_range = [];
    for (var i = first_year; i <= last_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];


 }

function LeapYear2(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year(2000,2022));