// OBJECT CREATION - 6types

//1)TYPE - Object Literals :

// let/var/const obj_name = {
//props ---key1 : val1 ,
        // key2 : val2 ,
        // key3 : val3 ,
        // ............
        // .............
// }

let xcv = {
    uname : "Aliya",
    address : "Bng",
    age : 21,
}
console.log(xcv);





// //2)TYPE - Object Constructor :

// adding, updating, accessing and deleting the object properties---
// dot( . )
// bracket  ( [] )


//A) adding ----- obj-name.keyvalue = val (or) obj-name["keyname"]
// xcv.salary = 50000;
// OR
xcv["salary"] = 60000;
console.log(xcv);

//B) updating ----
// xcv.address = "MUMBAI"
// OR
xcv["address"] = "CHENNAI";
console.log(xcv);

//C) accessing----- obj-name.keyname, obj-name["keyname"]
console.log(xcv.uname);
// OR
console.log(xcv["age"]);

//D) deleting ----- delete obj-name.keyname (or) delete obj-name["keyname"]
// delete xcv.age;
delete xcv["age"];
console.log(xcv);


// // brand=thar, color=red, engine = petrol
let car = {
    Brand : "Thar",
    Color : "Red",
    Engine : "Petrol",
}
console.log(car);

car["rate"] = 600000;
console.log(car);






// 3)TYPE - CONSTRUCTOR FUNCTION :
function employee(empid,ename,role){
    this.empid = empid;
    this.ename = ename;
    this.role = role;
}

let emp1 = new employee(1,"Saran","Frontend Developer")
console.log(emp1);

let emp2 = new employee(2,"Nagaraj","Power BI Developer")
console.log(emp2);





//  ###### TASK - using OBJECT LITERAL ######

let user = {
    //Direct Keys = fname,lname,sal,age,language,address,fullname
    fname : "Saran",
    lname : "E",
    salary : 70000,
    age : 26,
    language : ["Tamil","English","Spanish"],
    address : {
        //Nested Keys (or) Indirect Keys = (state,city)
        state : 'TN',
        city : "Tirunelveli",
    },
    fullname : function(role){
        console.log(`Hello I am ${this.fname} ${this.lname} working as a ${role}`);
    } // Object Method : function which is passed as a value to the key of an object
}
console.log(user.fname);
console.log(user.salary);
console.log(user.language[0]);
console.log(user.address.state);
console.log(user["address"]["city"]);
user.fullname("Test Engineer");




// 4) TYPE - Object Method--

let std = {
    sname : "Murali",
    sid : 111,
    address : 'mumbai'
}

// ! keys(obj-name) : returns all the keys of an object in the form of array
console.log(Object.keys(std));// O capital in object


//  ! values(obj-name) : returns array of values of the object
console.log(Object.values(std));

//  ! entries() : returns nested array : each array --- key and value
console.log(Object.entries(std));

//  ! hasOwnProperty("keyname") : check wheather the specified property is present or not
console.log(std.hasOwnProperty("sid"));
console.log(std.hasOwnProperty("salary"));

//  ! assign() : merge multiple objects
let std1 = {
    course : "BE",
    dept : "CIVIL",
}

// //  a) assign new value but Affecting original object
// Object.assign(std,std1)
// console.log(std);


//  b) assign new value without affecting the original object
let newStd = Object.assign({},std,std1)
console.log(newStd);
console.log(std);


//  ! seal(obj-name) : used to seal the object ---
Object.seal(std)

// a) access
console.log(std.sid);

//  b) update
std.sname = "Arun"
console.log(std);

// CAN'T ADD after passing SEAL CMD 
std.course = "B.tech";
console.log(std);

//  CAN'T DELETE after passing SEAL CMD 
delete std.sname
console.log(std);


// ! freeze : used to freeze the object
// can't - add,delete and upgrade 
// can - access
Object.freeze(std);
// access - it works
console.log(std.sid);

// update - won't work
std.address = "pune"
console.log(std);


// add - won't work
std.age = 21
console.log(std);

// delete - won't work
delete std.sname
console.log(std);

// isFrozen(obj-name) : 'F' capital in "Frozen" and 'O' capital in "Object"
console.log(Object.isFrozen(std));// "TRUE" if the object is frozen before



// ! call(), apply() & bind() : used to execute particular function for multiple objects

// a) call() : to call the particular function for multiple objects
//   TYPE 1(CALL)
let per1 = {
    fname : "Saran",
    lname : "E",
    role : "Python Developer",
    salary : 90000,
    fullname : function() {
        // here ${this. } is must
        console.log(`Hello I am ${this.fname} ${this.lname} working as a ${this.role} and i am earning ${this.salary}`);
    }
}
per1.fullname()

let per2 = {
    fname : "Nagaraj",
    lname : "E",
    role : "Java Developer",
    salary : 85000,
}
//target_function.call(obj_name)
per1.fullname.call(per2)



// (OR)


// TYPE 2(CALL)
let pers1 = {
    fname : "Vimal",
    lname : "S",
    fullname : function(role,salary) {
        console.log(`Hello I am ${this.fname} ${this.lname} working as a ${role} and i am earning ${salary}`);
    }
}
pers1.fullname("Tech Support Engineer", 45000)

let pers2 = {
    fname : "Arun",
    lname : "K"
}
let pers3 = {
    fname : "Muthuvel",
    lname : "Q"
}//SYNTAX : target_function.call(obj_name)
pers1.fullname.call(pers2,"Frontend Developer", 30000)
pers1.fullname.call(pers3,"Backend Developer", 60000)




// (OR)


// TYPE 3(CALL)
let fullname = function(role,salary) {
    console.log(`Hello I am ${this.fname} ${this.lname} working as a ${role} and i am earning ${salary}`);
}

let pr1 = {
    fname : "Prithvi",
    lname : "K"
}

let pr2 = {
    fname : "Sridar",
    lname : "Q"
}

fullname.call(pr1,"Webtech Developer", 80000)
fullname.call(pr2,"Fullstack Developer", 43000)


// b) apply () : very similar to call() --- function argument we should pass in the form of array
fullname.apply(pr1,["Test Engineer",30000])


// c) bind () : very similar to call() and apply() --- won't execute the function directly, take the copy of the function and execute and returns new function
 let result1 = fullname.bind(pr1,"Teacher",30000);
 console.log(result1());// as we defined console before it will givw result along with undefined so avoid console here as we used before

 let result2 = fullname.bind(pr2,"Proffesor",70000);
 result2(); 




//  ! ITERATORS
// ! forEach(), map(), for of, for in

// a) forEach(callback fun) : Higher Order Function -- executes a specific function for each element of the array
// output = seperately
//SYNTAX : array_name.forEach(()=>{})
let stds = ["saran","murali","arun","muthu"]
stds.forEach((val,ind)=>{
    // console.log(val)
    console.log(`Hello ${val}`)
})


// b) map() :
// output = array (diff from forEach)
let arr = stds.map((val,ind)=>{
    return`hello ${val}`
})
console.log(arr);



//  c) for of() : iterate the array
// SYNTAX - for ( let val of array_name )
// diff btwn for and for of = updation and condition are done internally in (for of)funct
let nums = [40,50,60,70,80];
for(let val of nums){
    console.log(val+100);
}


//  d) for in() : iterate over KEYS of an object
// for ex : obj_name = bike, key_name = Brand ,value = triump
let bike = {
    brand : "Triump",
    Color : "Red",
    engine : "Petrol",
}
for(let i in bike){
    // console.log(`${i}`);// over keys alone
    console.log(`${i} : ${bike[i]}`);// both keys and value
}



//  ! DATE obj

let d = new Date()
console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());//Railway time
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

// a) Set
d.setFullYear(1996)
d.setDate(19)
d.setMonth(11)//as January = 0 , so we give 11 to december
console.log(d);




// ! MATH() : M capital
// a) power - pow(a,b).... a = base & b = exponent
console.log(Math.pow(2,4)); // 16


// b) square root : sqrt(num)
console.log(Math.sqrt(9)); // 3

// c) cube root : cbrt(num)
console.log(Math.cbrt(8)); //2
console.log(Math.cbrt(20)); //2.7144176165949063

// d) roundup : round(num) -to nearest integer
console.log(Math.round(7.1)); //7
console.log(Math.round(7.9)); //8
console.log(Math.round(76.67)); //77
console.log(Math.round(1.5)); //2
console.log(Math.round(-9.8)); //-10


// e) ceiling : ceil(num) - round up to nearest HIGHEST integer
console.log(Math.ceil(3.3)); //4
console.log(Math.ceil(563.89)); //564
console.log(Math.ceil(-98.7)); //-98


// f) floor(num) : round up to nearest LOWEST integer
console.log(Math.floor(3.3)); //3
console.log(Math.floor(563.89)); //563
console.log(Math.floor(-98.7)); //-99


// g) trunc(num) : returns only integer part and removes decimal part 
console.log(Math.trunc(3.3777744)); //3
console.log(Math.trunc(563.87689)); //563
console.log(Math.trunc(-98.7877)); //-98

// h) random() : generate the random numbers between 0 to 1 
// FOR OTP creation
console.log(Math.random()); // 0.1582020856362485 // 0.7523697154215896 //generate random number btwn 0 to 1 everytime we refresh

// i) max(numbers) : max among given
console.log(Math.max(50,70,80,75,6,30,-80,-70,-2)); // 80

// j) min(numbers) : min among given
console.log(Math.min(50,70,80,75,6,30,-80,-70,-2)); // -80






// TASK -> OTP CREATION

function generateotp(){
let text = '0123456789';
let otpp = ""

    for(let i=1;i<=4;i++){
        otpp += text[Math.floor(Math.random()*text.length)]
    }
     // console.log(otpp);
    alert(`The OTP will be valid for 30sec and the OTP is ${otpp}`);
}
generateotp()



function generatecaptcha(){
    let text = 'qwertyuiasdfghjkzxcvbnm';
    let capt = ""
    
        for(let i=1;i<=4;i++){
            capt += text[Math.floor(Math.random()*text.length)]
        }
         // console.log(capt);
        alert(`The CAPTCHA will be valid for 30sec and the CAPTCHA is ${capt}`);
}
generatecaptcha()





// !STRING : collection of characters
let str = "Good Evening"
console.log(str.length);

// a) slice(start_index , end_index) : to get a part of a string
console.log(str.slice(3,5)); // won't consider END INDEX, gives value b4 end index
console.log(str.slice(3,6)); // we get 5th index as it wont consider end index
console.log(str.slice(3)); // all values after 3rd index
console.log(str.slice(8));
console.log(str.slice(-5,-1)); // we get upto -2nd value 

// b) substring() : same as slice but WON'T accept NEGTIVE index
console.log(str.substring(3,8));
console.log(str.substring(8));
console.log(str.substring(-5,-1)); // NO VALUE as this wont accept -ve 
console.log(str.substring(-4)); // Gives ALL VALUE if no end index given

//  c) substr(start_index , length) : similar to slice but here we give 2nd argument as LENGTH
console.log(str.substr(5,4));
console.log(str.substr(2,9));
console.log(str.substr(5,40)); //gives all value after 4th index
console.log(str.substr(-5,3)); //gives 3 values after -4th index


//  d) replace(old_string , new_string) :
console.log(str.replace("Evening","Afternoon"));
console.log(str.replace("o","💛"));


//  e) replaceAll(old_string , new_string) : here A capital
console.log(str.replaceAll("o","💛"));


//  f) trim() : remove the start and end space from the string
//  trimStart() : remove the start space from the string
//  trimEnd()  : remove the end space from the string
let txt = "   Have a Happy Weekend    "
console.log(txt);
console.log(txt.trim());


//  g) indexOf(str) : returns the index number of the specified char
console.log(str.indexOf('o'));

//  h) lastIndexOf(str) : returns the index number of the last occurence of the specified char
console.log(str.lastIndexOf('o'));

//  I) includes() : gives TRUE if the given value exist otherwise FALSE
console.log(str.includes('o'));
console.log(str.includes('even'));
console.log(str.includes('Even'));
console.log(str.includes('After'));

//  j) repeat(num) : repeat the value given number of times
console.log(str.repeat('10'));

//  k) charAt(index) : returns the element of the specified index number
console.log(str.charAt(6));
console.log(str.charAt(17));

//  l) charCodeAt() : returns the ASCII value of the specified index number
console.log(str.charAt(6));

//  m) concat() : used to merge multiple strings
console.log(str.concat(txt));

//  n) split() : convert string into array
console.log(str.split()); // ['Good Evening']
console.log(str.split("")); // ['G', 'o', 'o', 'd', ' ', 'E', 'v', 'e', 'n', 'i', 'n', 'g']
console.log(str.split(" ")); // ['Good', 'Evening'] ...string divide at where SPACE present
console.log(str.split('e')); // ['Good Ev', 'ning'] ...string divide at where " e " present

//  o) padStart( length_of_, X ) : gives result like = xxxxxxxxxx6789...... used in (" aadhar card, bank card , etc ")
let num = "6533"
console.log(num.padStart(10,'X'));

let numb = "63"
console.log(numb.padStart(9,"X"));


//  p) padEnd( length_of_, X ) : gives result like = 6789XXXXXXXXXXX...... used in (" aadhar card, bank card , etc ")
let nuum = "6533"
console.log(nuum.padEnd(12,"X"));

let numm = "63"
console.log(numm.padEnd(11,'X'));



// string reverse & string palindrome
let sp1 =prompt("Enter String");
let sp2 = sp1.split('').reverse().join(''); // split(string to array) , reverse (reverse array) , join(array to string)
console.log(sp2);

if (sp1==sp2){
    alert("passed string is palindrome");
} else{
    alert("passed string is not palindrome") ;  
}


