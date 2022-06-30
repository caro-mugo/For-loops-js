for(var i=1;i<51; i++){
    if (i%2==0){
        console.log(i)
    }
}
// for loop
for(var x=1;x<30; x++){
    if(x%5==0){
        console.log(x)
    }
}
// using while and do
var a =1
do{
    if(a%5===0){
        console.log(a)
    }
    a++
}
while(a<50);
// while loop
var a=1
while(a<50){
    if(a%5==0){
        console.log(a)
    }
    a++
}
// labeled statement
// const car=["Toyota","Tesla","Wagon","Range rover","Audi"]
// const student=["Sakina","Carol","Nyambura","Mugo","Kayle"]
// let m=3;
// do{
//     console.log(car[m])
// }
// while(m<car.length)
//for in for of
const cars=["Toyota","Tesla","Wagon","Range rover","Audi"]
for (let car of cars){
    console.log(car)
}
for (let i in cars){
    console.log(i)
}
//closure
function abc(){
    let m='go'
    function def(){
        console.log(m)
    }
    def()
}
abc()
for(var c=1; c<=80; c++){
    if(c%2===0){
        console.log(c)
    }
}
var a=0
do{
    if(a%3===0){
        console.log(a)
    }
    a++
}
while (a<50);
for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
// sum of array of alll elements
const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
var number=[45,30,20,25];
console.log(Math.max(...number));
// javascript create a function that takes two arguments both are intergers returns true if sum is 10 otherwise false

function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

// console.log(string_reverse("w3resource"));
// console.log(string_reverse("i like novels"));
// console.log(string_reverse("JavaScript"));
// var a = "i", b = "like" ,c ="novels";
// a = b +  (b = a, c=a,"");

// console.log(a, b, c); // Hello world
// a="i love God"
// y=a.split()
// start=0
// end=len(a)-1
// while start < end;



