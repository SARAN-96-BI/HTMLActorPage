// document.write("Hello JS");
console.log("HAVE A GOOD DAY ❤👍");


// hoisting : moving all the declaration to the top of the current scope
console.log(num);//undefined bcoz console b4 declraing variable
var num=30;
console.log(num);//defined


// console.log(std); - reference error
// TDZ - Temporal Dead Zone (block of area where the variable is inaccesible until it initializes with a value )
// can't redeclare let variable
let std='Balaji'
console.log(std);//defined







// declaration
var a;
// initialisation
a=90;
// re-initialisation
a=10000
console.log(a);
// re-declaration
var a=90000
console.log(a);




// initialisation
// const sal = 6000;
// console.log(sal);

// print(---------------)





// datatypes : primitive(store only one value,immutble) and non-primitive(multiple values,mutable)
//1.primitive(7 types)

//a) STRING
let employee = "Pushpa";
let address = 'Kolkata';

//a.a) Template string or Template literal(``)
console.log(`Hello i am ${employee} and I am from ${address}`);
let user=`ram`;//we use backtick to get multiline output

//typeof operator : to check the datatype of the variable
console.log(typeof employee);
console.log(typeof address);


//b) NUMBER
//in Java we dont have int and float... only Number and 
// let age = 24;
// let salary=45890.89
// console.log(typeof age);
// console.log(typeof salary);

//c) BOOLEAN
let isDeveloper = true
console.log(typeof isDeveloper);

//d) UNDEFINED : uninitialised variables
let company;
console.log(typeof company);

//e) NULL : creats an empty object(single data) for future use
let project=null;
console.log(typeof project);

//f) SYMBOL : create a empty funtion(multiple data) for future use
// here S CAPITAL for Symbol
let work = Symbol;
console.log(typeof work);

//g) BigInt : stores huge data
let sal =1n ;
console.log(typeof sal);




//##operators(5 types in JS)-
// i) arithmetic oprtr(+ ,- ,* ,/ ,% ,++ ,--)

// let cost1 = 3000;
// let cost2 = 4500;
// console.log(`Total cost is ${cost1+cost2}`);
// console.loh(cost2-cost1);

// let book = 10;
// let cost = 50;
// console.log(`Total cost is ${book*cost}`);

// let bill = 5400;
// let item = 9;
// console.log(`Total cost is ${bill/item}`);

console.log(99/3);
console.log(99%2);//  % - after division REMINDER is OUTPUT

let y=10;
//post increment(a--) = value will be printed 1st then only its subtracted
y= y--
console.log(y);


let x = 10;//11 +  10 +  9  +  10 +   9 = 49
console.log(x++ + --x + x-- + ++x + --x);
//           10 + (1-11=10) + (10-1=9) + (1+9=10) + (1-10=9) 

let k= 20;//21  +  22 +  21 + 22  +  23 = 107
console.log(k++ + ++k + --k + k++ + ++k);
//           20 + (1+21=22) + (1-22=21) + (21+1=22) + (1+22=23)


//ii) Assignment oprtr(=, +=, -=, /=, %=)
let cost = 40;
cost += 100;//cost=cost+100
// cost -= 10;//cost=cost-10
// cost *= 100;//cost=cost*100
// cost %= 3;//cost=cost%3
console.log(cost);


//iii) Comparison oprtr / Relational oprtr : TRUE or FALSE(>,<,>=,<=,==,===,!=)
console.log(10<30);//TRUE
console.log(50>60);//FALSE
console.log(30>=30);//TRUE
console.log(60<=20);//FALSE

// let age=20;
// console.log(age!=40);//TRUE


let s=20
let d="20"//string
console.log(s==d); // TRUE bcoz '==' - compares only the values
console.log(s===d); //FALSE bcoz '===' - compares values and datatypes



//iv) Logical oprtr( && (and), || (or), ! (NOT)(opposite) )
// used when we check multiple conditions
// a) &&-TRUE only if ALL conditions are TRUE
console.log(2<=4 && 60<100 && 55<90);

// b) ||-TRUE even if ONE condition is TRUE
console.log(3>1 || 56>=93 || 65<87);

// c) !- gives OPPOSITE
let w=10
console.log(!(w===70));

let fresher=true
console.log(!fresher===true);

// // c.c) !- Ternarey oprtr
// //syntax = (condition)? true statement : false statement
// let age = 45;
// console.log(typeof age);
// (age >=65)? console.log("You are a Senior Citizen") : console.log("You are not a Senior Citizen");

// //prompt - get detail from user
// let age = Number(prompt("Enter Your Age"));
// console.log(typeof age);
// (age >=65)? console.log("You are a Senior Citizen") : console.log("You are not a Senior Citizen");

// //document.write make the output avilable in browser screen
// let age = Number(prompt("Enter Your Age"));
// console.log(typeof age);
// (age >=65)? document.write("You are a Senior Citizen") : document.write("You are not a Senior Citizen");
// 18

// let num1=Number(prompt('Enter the first number'));
// let num2=Number(prompt('Enter the second number'));
// num1>num2? console.log( `${num1} is greater than ${num2}`) : console.log( `${num1} is less than ${num2}`);


// **CONDITIONAL STATEMENT:(if, elde, else if)

// let bill = 699;
// if (bill >= 500){
//     let dis = 2/100*bill;
//     document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
// }



// let bill = 399;
// if (bill >= 500){
//     let dis = 2/100*bill;
//     document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
// }
// else{
//     document.write(`Discount is NOT APPLICABLE`);
// }



// let bill = 7899;
// if (bill >= 500 && bill <= 1000){
//     let dis = 2/100*bill;
//     document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
// }
// else if (bill >= 1001 && bill <= 2000){
//     let dis = 5/100*bill;
//     document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
// }
// else if (bill >= 2001 && bill <= 5000){
//     let dis = 10/100*bill;
//     document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
// }
// else if (bill >= 5001){
//     let dis = 20/100*bill;
//     document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
// }
//     else{
//     document.write(`Discount is NOT APPLICABLE`);
// }




let bill = Number(prompt("Enter the Bill Amount"));
if (bill >= 500 && bill <= 1000){
    let dis = 2/100*bill;
    document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
}
else if (bill >= 1001 && bill <= 2000){
    let dis = 5/100*bill;
    document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
}
else if (bill >= 2001 && bill <= 5000){
    let dis = 10/100*bill;
    document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
}
else if (bill >= 5001){
    let dis = 20/100*bill;
    document.write(`Your Payable Amount is Rs.${bill-dis} with Discount of Rs.${dis}`);
}
    else{
    document.write(`Discount is NOT APPLICABLE`);
}



// SWITCH
let data = Number(prompt("Enter the date number"));
//alert - this cmnd helps to give the output in the alert box above
switch (data) {
    case 1 : alert("It is Monday")
       break;
    case 2 : alert("It is Tuesday")
       break;
    case 3 : alert("It is Wednesday")
       break;
    case 4 : alert("It is Thursday")
       break;
    case 5 : alert("It is Friday")
       break;
    case 6 : alert("It is Saturday")
       break;
    case 7 : alert("It is Sunday...Funday")
       break;
    default : alert("Invaid Input")
       break;
}




//LOOPS - (while, do while, for)
//loops steps - initialisation(done outside the loop), condition(while, do while, for), updation(inside while)


//while - entry controlled loop
let j = 1;
while(j <= 6){
    //ln for space
    document.writeln('Hello User...Executing the While');
    j++;//(updation must otherwise loop wont stop)so here j=11<10 so LOOP STOPS
}


//do while - exit controlled loop
let m = 10;
do{
    document.writeln("I Love Java Script..❤❤");
    m--;
}while(m>6);//so here after every execution value 10 reduce by 9 then 8 then 7 like upto 4 times before reaching 6 where it stops


//for
for(let i=1 ; i <=25 ; i++){
    document.writeln('Hello GOOD EVENING🤞🤞');
}






// ! FUNCTIONS
// ! parameters : the variables declared at the time of function declaration
// ! Argument : the values passed for the function parameters at the time of function calling 

function demo(user,address){
    console.log(`Hello I am ${user} and I am from ${address}`);
}
demo("Poojitha","Bng")


// always use only one return key word in function
// return always need to have console function to get result
function add(num1,num2){
    return num1+num2;
} 
console.log(add(10,30));


// // ! Functional Expression OR Function with Expression
// // entire function stored in a variable
// // function is passes as a value to a variable along with function is known as FIRST CLASS FUNCTION or FIRST CITIZEN FUNCTION
// let greet=function(){
//     console.log("Nice DAY👌👌");
// }
// greet()


// ! Immediate Invoking Function : function which should be called immediately after the declaration
// entire function witin ()
(function(y){
    console.log(y*y);
})(9);


// ! Nested function : function inside another function
//can access parent within child but vice versa not possible

// function parent(){
//     let phouse = 6;
//     let pland = "10 acres"
//     console.log(`parent props : ${phouse} houses and ${pland} land`);
//     function child(){
//         let chouse = 1;
//         let cland = "5 acres"
//         console.log(`child props : ${chouse} houses and ${cland} land`);
//     }
//     child();
// }
// parent();




// function parent(){
//     let phouse = 6;
//     let pland = "10 acres"
//     console.log(`parent props : ${phouse} houses and ${pland} land`);
//     function child(){
//         let chouse = 1;
//         let cland = "5 acres"
//         console.log(`child props: ${chouse} houses and ${cland} land`);
//     }
//     return child;
// }
// parent()(); // --------Java Currying is possible only when we give return function to child(  "without()" ) within parent



function parent(){
    let phouse = 6;
    let pland = 10;
    console.log(`parent props : ${phouse} houses and ${pland}acres land`);
    function child(){
        let chouse = 1;
        let cland = 5;
        console.log(`parent props : ${chouse+phouse} houses and ${cland+pland}acres land`);
        console.log(`parent props : ${phouse} houses and ${pland}acres land`);
            //lexical scoping/ scope chaining :
        // closure : it holds the required data
    }
    return child;
}
parent()(); // --------Java Currying is possible only when we give return function to child(  "without()" ) within parent



// ! Higher Order Function : the function whuch takes one more function or returns one more function is called higher order function
// using HOF we can do multiple task
// ! Callback Function : function passed as an argument to one more function
function demo(a,b,task){
    let res = task(a,b) //task(20,40)--60
    return res
}

let add = demo(20,40,function(x,y){return x+y})
console.log(add);

let mul = demo(2,6,function(a1,a2){return a1*a2})
console.log(mul);

//2.Non-Primitive


