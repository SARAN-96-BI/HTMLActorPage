//  ! Arrow function --- reduce the syntax

let demo = (user) => {return`hello ${user}`} //return keyword and { } to get multiple output
console.log(demo('neha'));



//  ! object method : function passed as a value to the key of an object
let emp = {
    fname : 'Ram',
    lname : 'D',
    fullname : function(){  //here we should not use arrow function as we use {this.} function
        console.log(`I am ${this.fname} ${this.lname}`);

    }
}
console.log(emp.fname);
emp.fullname()



//  ! constructor function
function student(sid,sname){
    this.sid = sid;
    this.sname = sname
}
let std1 = new student(1,`neha`)
console.log(std1);



//  ! rest parameter : syntax - (...identifier) : it is a parameter : it is an improved way to handle the function parameters : we can store indefinite no. of arguments
//    rest parameter : will store multiple data in form of array
function nums(...a){
    console.log(a);
    // console.log(b);
}
nums(1,20,6,45,68,743,757666,75646879988)

//  ! rest parameter is used to store rest of the values
function stds(s1,s2,...std){
    console.log(s1); // just 1st name
    console.log(s2);
    console.log(std); // all rest are stored here

}
stds('oviya','sanjana','sneha','ahmed','pushpa')


// ! spread operator : syntax - (...iterator) : quickly copy all part of exixting array into another array

// let integers = [10,20,30,40,50,60];
// let num = (num1,num2) => {
//     console.log(num1);
//     console.log(num2);
// }
// num(integers[0],integers[2])


               // 0r easily can access all by


let integers = [10,20,30,40,50,60];
let num = (...numbers) => {
    console.log(numbers);
}
// num(integers[0],integers[2],integers[3],integers[5])
num(...integers)  // spread operator

//  ! spread : we can merge also here by spreading
let angels = ['sanjana','pushpa','neha']
let lions = ['saran','murali','vimal']
let studs = [...angels,...lions]
console.log(studs);



//  ! Destructuring : taking out the element only which we need from the array
let fridge = ['apple','vegetable','milk','banana','curd','nuts','egg','grapes','mango'];
let[a1,a2,a3,a4,a5,a6,a7,a8,a9] = fridge
console.log(a1);
console.log(a4);
console.log(a7);

//  ! destructure -- vegetables , curd , egg alone
let[ ,z1,,,z2,,,z3, ] = fridge
console.log(z1);
console.log(z2);
console.log(z3);

// ! object destructuring : taking out the property of an object only which we need 
//  (while object destructuring we have to use the " same keyname as a variable name" ) 
let empp ={
    ename : 'Raj',
    salary : 50000,
    address : 'Jaipur'
}

// destructure employee name and sal from emp object
let {salary,ename} = empp
console.log(ename);
console.log(salary);






// NEW EX
let obj = {
    sname : 'Adithya',
    std : 123,
    isDeveloper : true,
    skills : ['html','css','js','react','java','sql'],
    address : {
        state : 'Kerala',
        city : 'mysore'
    },
    greet : function() {
        console.log(`Hello i am ${this.sname}`);
    
    }
}

// ! Direct Keys : sname, sid, isDeveloper, skills, address, greet
// ! Indirect Keys : state, city

//  ! destructure std, skills, greet, address
// // WAY 1 :
// let {std,skills,greet,address} = obj
// console.log(std);
// console.log(skills);
// console.log(address);
// greet();

// // WAY 2 :
let {std,skills:[s1,,,s2,,s3],greet,address} = obj
console.log(std);
console.log(s1,s2,s3);
console.log(address);
greet();


// destructuring state and city
// // WAY 1 :
// let {state,city} = obj.address
// console.log(state);
// console.log(city);

// WAY 2 :
let {address:{state,city}} = obj
console.log(state);
console.log(city);
// // console.log(address); we wont get address bco we call only address value not key










