
// ! Higher Order Function : the function whuch takes one more function or returns one more function is called higher order function
// using HOF we can do multiple task
// ! Callback Function : function passed as an argument to one more function
function demo(a,b,task){
    let res = task(a,b) //task(20,40)--60
    return res
}

// let add = demo(20,40,function(x,y){return x+y})
// console.log(add);

let mul = demo(2,6,function(a1,a2){return a1*a2})
console.log(mul);


//Arrow Function : Reduces syntax
//syntax : let var_name = () => {}
let greet = (user) => {
    console.log(`GOOD AFTERNOON ${user}`);
}
greet("Abishek")

// a) implicit return : skip floer bracket and return key word
//implicit return only for single line arrow fn
let say = (user) => `GOOD AFTERNOON ${user}`;
console.log(say("Abishek"));
//above 2 types for single line


// b) below arrow fn for multiple line : explicit return arrow fn
// {} and return keyword must
let add = () => {
    let z = 200;
    let y = 1000;
    let res = y/z;
    return res
}
console.log(add());


// let demo = () => `Have a Happy Day`
// console.log(demo());


// ! Generator function : used to generate multiple values
// ! yield : to generate multiple values
function*generate(){
    yield "Pushpa"
    yield 200000
    yield "Bangalore"
}


let res = generate()
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);

for(let i=1;i<=3;i++){
    // if(typeof res.next().value);
    console.log(res.next().value);
}


// ! parameters user , address ------ user(prompt)
// ! design a function..... "Hello I am user and I am from address" 
