// ! Array
// syntax : var / let  /const arr_name = [value1,value2,......]
// can display array only in console
let arr = [10,20,30,40,50,60,70]
console.log(arr);
console.log(arr.length);


let std = [1, "saran","Hyd", true, 400000.67]
console.log(std);

// ! 2.Array Constructor
let arr1 = new Array()
console.log(arr1);// empty set


let arr2 = new Array(5,6,7,8,9)
console.log(arr2);


let arr3 = new Array()
arr3[0] = 40;
arr3[1] = 50;
arr3[2] = 400;
console.log(arr3);

let nums = [10,20,40,60,80,70];

//  ! access
console.log(nums[1]);

//  ! update
nums[3] = 600;
console.log(nums);

//  ! add
nums[6] = 1000;
console.log(nums);

//  ! delete
delete nums[2]
console.log(nums);




// ARRAY METHODS
let amazon = ['mobile','laptop','shirt','ring','books']
console.log(amazon);

// 1) push(element) : add the multiple elements at the end of array
amazon.push('TV','AC') 
console.log(amazon);

//  2) unshift() : add the multiple elements from the starting of the array
amazon.unshift('kurtha','belt')
console.log("After unshift");
console.log(amazon);

//  3) pop() : delete the last element
amazon.pop()
console.log("After  pop");
console.log(amazon);

//  4) shift() : delete the first element
amazon.shift()
console.log("After shift");
console.log(amazon);

//  5) splice(start index, delete_count, replacement_elements) : to ADD or DELETE the elenents from array
// splice affects the original array
amazon.splice(2,2,'watch','bluetooth','chain')
console.log(amazon);

amazon.splice(3,2)
console.log(amazon);

amazon.splice(2,0,'fan','chair')
console.log(amazon);

//  6) slice(start_index, end_index) : to access the part of the array
let slicedArr = amazon.slice(2,6)//just 2 to 6 alone will be displayed 
console.log(slicedArr); //slicedArr is just name given by us

let sArr = amazon.slice(2)//after 2nd index all element will be displayed
console.log(sArr);


//  7) indexOf() : to get index position of any element
console.log(amazon.indexOf('helmet'));// not present in array so -1
console.log(amazon.indexOf('belt'));
console.log(amazon);

//  8) includes() : check wheather the specified element is present in array or not
console.log(amazon.includes('fan'));
console.log(amazon.includes('stove'));

//  9) at(index) : returns elements present in the specified index
console.log(amazon.at(3));
console.log(amazon.at(300));// undefined when index not present

//  10) join() : join all the elements of array and returns single string
let str = amazon.join()
console.log(str)

let str1 = amazon.join('')//removes comma
console.log(str1)


//  11) tostring() : same as join
// diffrerce is it return STRING WITH COMMA
let str2 = amazon.toString()
console.log(str2)

let str3 = amazon.toString("")//not different like in join
console.log(str3)


//  12) concat() : merge multiple array
let flipkart = ['milk','box','bag','shoe']
let newArr = amazon.concat(flipkart)
console.log(newArr);
console.log(flipkart);
console.log(amazon);


// 13) reverse() : returns reversed array
console.log(amazon.reverse()); 


// 14) split() : to convert string into array
let text = "good day"
let ar = text.split()
console.log(ar);

let txt = "good day"
let ary = text.split('')//every letter and space is string
console.log(ary);

let tt = "good day"
let arry = text.split(' ')//as we given space btwn '' -- we get string whenever space comes
console.log(arry);

let tex = "good day"
let arrry = text.split('o')//here letter o is left and string created
console.log(arrry);



// ! FILTER , MAP and REDUCE ----All are Higher Order Function so require call back function like =>, etc...
// all 3 methods give array as output

// 1) FILTER : filter the array elements based on the condition--- returns new array
let cost = [8000,600,5000,700,400,3800,6000,1500]
let filteredArr = cost.filter((val,ind)=>{
    if(val>=1000){
        return val
    }
})
console.log(filteredArr);


// 2) MAP : will map each array element with specified expression
let mappedArr = filteredArr.map((val,ind)=>{
        return val - 2/100*val// minus discount 2%
})
console.log(mappedArr);


// 3) REDUCE : reduce all array elements into single value and returns single value
let bill = mappedArr.reduce((accumulator,val) => {
    return accumulator+val;// accumulator is just a name given by user it can be any
},0)// 0 is accumulator's value just a user given value it can be any
console.log(bill);// accumulator+val =  0 + 1st value= result+ 2nd value+.......=fnal value


let bil = mappedArr.reduce((accumulator,val) => {
    return accumulator+val;// accumulator is just a name given by user it can be any
},6)// 6 is accumulator's value just a user given value it can be any
console.log(bil);//accumulator+val = 6 + 1st value= result+ 2nd value+.......=fnal value


let bi = mappedArr.reduce((accumulator,val) => {
    return accumulator*val;// accumulator is just a name given by user it can be any
},0)// 0 is accumulator's value just a user given value it can be any
console.log(bi);

let bii = mappedArr.reduce((accumulator,val) => {
    return val/accumulator;// accumulator is just a name given by user it can be any
},)// 0 is accumulator's value just a user given value it can be any
console.log(bii);

