'use strict';

/*let javascriptIsFun=true;
console.log(typeof javascriptIsFun );
console.log(40+24+34);
console.log("naveen");
let firstName="naveen";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(typeof 'naveen');
console.log(typeof 23);
console.log(typeof true)
javascriptIsFun="naveen";
console.log(typeof javascriptIsFun );
 let a =24;

let naveen ;
console.log(typeof naveen );
naveen="naveen kumar"
console.log(typeof naveen );
console.log(typeof null);
 a= 23;
console.log(a);
const birthYear=1991;
var w= 20;
w=21;
console.log(w);
let lastName ='jada';
console.log(lastName)
lastName ='naveen';
console.log(lastName)
const ageNaveen=2021-1999;
const ageNavee=2021-1998;
console.log(ageNaveen *2 ,ageNavee/2, 2 ** 3)


let marksmass=78;
let marksheight=1.69;
let markBMI=marksmass/(marksheight*marksheight);
console.log(markBMI);

let johnsmass=92;
let johnsheight=1.95;
let johnsBMI=johnsmass/(johnsheight*johnsheight);
console.log(johnsBMI);

let ismarkHigherBMI=markBMI > johnsBMI
console.log(ismarkHigherBMI);







firstName='jada naveen kumar';
let dateofbirth=1999;
let now=2022;
// age=2022-1999;
let job='teacher';

//  console.log("I'am "+firstName + age +" year's"+'  old '+job+"!");
// naveen=`I'am ${firstName}  ${age} year's old ${job} ! `;
console.log(naveen);

// normal string
console.log("hi\n\
naveen\n\
kumar");
// template literals or backtics

console.log(`naveen
kumar
jada`);

// code driving license

const ag = 16;

if (ag>=18){
    console.log("naveen  is eligible for driving ")
}
else{
    let lessage=18-ag;
    console.log("naveen  is  not eligible for driving and he was"+" "+lessage+" "+"years less than the eligible age");
    console.log(`naveen  is  not eligible for driving and he was ${lessage} years less than the eligible age`);
}

/*let marksmass=92;
let marksheight=1.95;
markBMI=marksmass/(marksheight*marksheight);
console.log(markBMI);*/

/*let johnsmass=78;
let johnsheight=1.69;
johnsBMI=johnsmass/(johnsheight*johnsheight);
console.log(johnsBMI);

if(markBMI > johnsBMI){
    console.log(`mark's bmi is ${markBMI} is higher than the ${johnsBMI} johns bmi`);
}
else{
    console.log(`john's bmi is ${johnsBMI} is higher than the ${markBMI} marks bmi`);
}

const year="1991";
console.log(Number(year),year);
console.log(Number(year)+9);
console.log(Number("naveen"));
console.log(typeof NaN);
var d=23
console.log(String(d));

console.log("I am + 23 + years old ")
console.log( "23"-"10")
console.log( "23"-10)
console.log( "23"/"10")
console.log( "23"*"10") 

let n="1"+1;
n=n+1;
n=n-1;
console.log(n);
console.log("23"-1-2+"3");
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
  
const money =0;
if (money)
{
    console.log('money has ');
}else{
    console.log('money doesnot have');

}
let age=16;
if(age!==17){
    console.log("hello");
}
else{
    console.log("hi naveen");
}
const hasDriverLicense=true;
const hasGoodVision=true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

/*const dolphinsScore=(96+108+89/3);
const kolasScore=(88+91+110/3)
if(dolphinsScore > kolasScore ){
    console.log("The winner of the competiton dolphins");
}
if (kolasScore > dolphinsScore){
    console.log("The winner of the competiton kolas"); 
}
if (kolasScore === dolphinsScore){
    console.log("The competiton will be draw ") ;
}
const dolphinsScore=((97+112+80)/3);
const kolasScore=((109+95+50)/3)
console.log(dolphinsScore , kolasScore);
if(dolphinsScore > kolasScore && dolphinsScore  >= 100 ){
  console.log("The winner of the competiton dolphins");
}
if (kolasScore > dolphinsScore && kolasScore >= 100){
   console.log("The winner of the competiton kolas"); 
}
if (kolasScore === dolphinsScore  && kolasScore>=100 && dolphinsScore >= 100 ){
   console.log("The competiton will be draw ");         
}else{
    console.log("no one wins the trophy ");
}

const day ='friday'
switch (day) {
    case "monday":
        console.log('Hi monday')
        
        break;
        case "tuesday":
            case "wednesday":
            console.log('Hi naveen  '); 
            break;
            case "thursday": 
            case "friday": 
            console.log('Hi naveen kumar'); 
            break;
            case "saturday":
                console.log('Hi saturday'); 
                break;
    default:
        console.log("not a valid day ");
        break;
}
console.log(`I'am ${2037-1991} years old`);
const aging =2;
aging>=18 ? console.log(` I like to drink wine`) : console.log(` I like to drink water`);

const drink = aging >=18 ? "wine" :"water";
console.log(drink);
console.log(`i like to drink ${aging >=18 ? "wine" :"water"}`);

let hasDriversLicense=false;
const passTest=true;
if (passTest) hasDriversLicense=true;
if (hasDriversLicense) console.log('i can drive');


function naveenkumar(){
    console.log('my name is j.naveen kumar');
}

naveenkumar()
naveenkumar()


function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`juice with ${apples} apples and ${oranges} oranges`;
    return juice;

}
 
const appleJuice= fruitProcessor(9,0);
console.log(appleJuice);
const appleorangeJuice= fruitProcessor(2,4);
console.log(appleorangeJuice);
const num=Number('23');


// function decclaration
function calcAge1(birthYear){
// let a=2037-birthYear;
return 2037-birthYear;
// return a;
}
const age2= calcAge1(1991);
console.log(age2);


// function expression
let age3= function(birthYear){
   return 2037-birthYear

}
const age4=age3(1991);
console.log(age2, age4);

const calcRetirementAge=(firstName,birthYear)=>{
    let age= 2022-birthYear;
    const retirementAge=65-age;
    return `${firstName} retires in ${retirementAge} years`;
}
console.log(calcRetirementAge(naveen,1999))

const calcAge=(ageofBirth)=>{
    const presentAge=2022-ageofBirth;
    return presentAge;
}
console.log(calcAge(1999));

function cutFruitPieces(fruits){
    return fruits * 4;
}
function numberofFruits(apples,oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice= `fruit juice  with ${applePieces} apple pieces and ${orangePieces}  orange pieces.`
    console.log("hi naveen Kumar ");
    return juice;
    
}
console.log (numberofFruits(6,4))

const friend1="naveen";
const  friend2="kumar";
const  na=["naveen","kumar"];
//   na=["navin","kuar"];

console.log(na);
na[1]="naveen";
console.log(na);

const years=new Array(1991,1992,1993,1994);
console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years.length);
console.log(years.length-1);
console.log(years);
console.log(years[years.length-1]);
console.log(years[years.length-1]);

const ab="gambhir";
const ne= [ab,"naveenkumar",2037-1991,na]
console.log(ne);
console.log(ne.length-1);

function calcAge1(birthYear){
    
    return 2037-birthYear;
}
const age = [1991,1992,1999,2000];
console.log(calcAge1(age));
console.log(calcAge1(age[0]));
console.log(calcAge1(age[1]));
console.log(calcAge1(age[2]));
console.log(calcAge1(age[3]));
console.log(age.length);*/
/*const age = [1991, 1992, 1999, 2000];*/
/*age.push(1997);
console.log(age);
console.log(age.length-1);
age.unshift("naveen");
console.log(age);
const poped= age.pop();
console.log(poped);


const poped1= age.pop();
console.log(poped1);
console.log(age);
const n=age.shift();
console.log(n);
console.log(age);
console.log(age.indexOf(1991));
console.log(age.indexOf(1947));
console.log(age.indexOf(1948));
console.log(age.includes(1991));
console.log(age.includes('1991'));

if(age.includes(1991)){
    console.log("hi naveen kumar");  
}

const calcTip=function(bill){
    return bill>=50 && bill <= 300 ? bill*0.15 : bill * 0.2;

}
const bills =[125,555,44];

const tips= [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
const total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,total);

const john2={
    firstName: "naveen",
    lastName: "jada",
    //age:2022-1999,
    location :"proddatur",
     gmail : "nav@gmail.com",
     friends: ["sudeer","sandy","surya"],
     birthYear: 2017,
     DriversLicense:true,
      calcAge:function(birthYear){

        console.log(this);
        return 2037-this.birthYear;
     },
     getSummary : function(){
        return `${this.firstName} age  is ${this.calcAge() } and he has ${this.DriversLicense ? 'a': 'no'} driversLiceense `;
     }
}
/*console.log(john.firstName);
console.log(john.lastName);
console.log(john['firstName']);
console.log(john['lastName']);
const nameKey='Name';
console.log(john['first'+nameKey])
console.log(john['last'+nameKey])
// console.log(john.'first'+nameKey)
const intrestedIn= prompt('what do you want to know about john  ? choose between firstName,lastName,age,location,gmail')
console.log(john[intrestedIn]);
//john['location'] ="proddatur";
//john['gmail']="nav@gmail.com";

console.log(`${john.firstName} has ${john.friends.length} friends and his best friend is called ${john.friends[0]}`);
console.log(john.calcAge(1999));
console.log(john ['calcAge'](1999));*/
// console.log(john2.calcAge());
// console.log(john2.getSummary());

/*for (let rep=1;rep<=10;rep++){
        console.log('Hi Naveen kumar ')
}

const jonas= [
    'jonas',
    'schemtdman',
      2037-1999,
      'teacher',
      ['michal','peter','peter'],
      true,
      23

]

const types=[];
for (let i=0;i<jonas.length;i++){
    console.log(jonas[i], typeof jonas[i]);
    //types [i] =typeof jonas[i]
    types.push(typeof jonas[i]);
}

console.log(types);

const years=[1991,1992,1993,1994];
const ages= [];
for (let i=0; i<=years.length-1;i++){
    ages.push(2037-years[i])
}
console.log(ages);*/

/*const jonas = [
  'jonas',
  'schemtdman',
  2037 - 1999,
  'teacher',
  ['michal', 'peter', 'peter'],
  true,
  23,
];*/
//continue statement

/*console.log('---only strings---');
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] !== 'string')
    continue;
    console.log(jonas[i], typeof jonas[i]);
}

// break statement 

console.log('breaks  when number cames');

for (let i=0;i<jonas.length;i++){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    if (typeof jonas[i]==='number' ) break;
        console.log(typeof jonas[i], jonas[i]);
    
}

for (let rep=jonas.length-1;rep>=0;rep--){
    console.log(jonas[rep]);
}


for(let i=1;i<4;i++){
    console.log(`hello naveen kumar ${i}`)
  

let j=1
while(j<=10){
    console.log(`hello naveen ${i}`);
    j++;
}

}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('the loop about to end ');
  }
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 37, 105, 10, 110, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
const avg = calcAverage([1, 10, 2]);

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(typeof arr3);
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp !== 'number') continue;
    if (currtemp > max) max = currtemp;
    if (currtemp < min) min = currtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);*/

/*const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp !== 'number') continue;
    if (currtemp > max) max = currtemp;
    if (currtemp < min) min = currtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitude([3, 5, 7], [1, 2, 3]);
console.log(amplitudeNew);

const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
console.log((document.querySelector('.sujan').na = '3 '));
//console.log(document.querySelector('.sujan').na);

document.querySelector('.qw').addEventListener('click', function () {
  const vow = Number(document.querySelector('.w').value);
  console.log(typeof vow, vow);
});

if (!this.vow) {
  console.log('no number');
} else if (vow === number) {
  console.log(document.querySelector('.sujan').na);
}
document.querySelector('.w').style.width = '15rem';*/

//function scope, global scope, local scope

/* function calcAge(birthYear) {
  console.log(firstName); // local scope variables can be accesed global scope variables
  var age = 2037 - birthYear;
  console.log(age);
  if (birthYear >= 1981 && birthYear <= 2000) {
    var ame = 'kutti';

    function add(a, b) {
      var c = a + b;
      console.log(c);
    }
    add(2, 3);
  }
  console.log(ame); // block scope variables with var decclartion can be accesed to out of scope because var is not a block scope and it is a function scope can be accesed to function and it can't be accesed to global scope
}

var firstName = 'naveen';
calcAge(1999);
//console.log(ame);
//console.log(age);
// local scope variables can't be accesed because this is global scope */

/*let birthYear = 1986;
const firstName = 'naveen';
if (birthYear >= 1981 && birthYear <= 2000) {
  const firstName = 'kutti'; // if we want to print the first name in local scope if the variables are same name in both local and global scope and the priotrity it will print current scope variable name only
  console.log(firstName); //it will print current scope variable
}
console.log(firstName); //it will print current scope variable */

/*console.log(n);
//console.log(a);
//console.log(c);

var n = 'naveen';
let a = 'sujan';
const c = 'dummy';
const arr= [1,10,20];
const [x,y]= arr;
console.log(x,y);
console.log(arr);*/

function myFunction() {
  alert("Hello World!");
}
myFunction();



