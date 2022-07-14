 "use strict";

let javascriptIsFun=true;
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
console.log(johnsBMI);*/

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
*/const dolphinsScore=((97+112+80)/3);
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


