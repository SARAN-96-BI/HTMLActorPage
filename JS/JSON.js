// //  ! JSON : Java Script Object Notation --- most popular format of storing and transporting the data

// let obj = { 
//     ename : 'pushpa',
//     sal : 100000,
//     desig : 'Developer'
// }
// console.log(obj);



// //  ! JSON.stringify() == convert normal obj into JSON format
// let jsonObj = JSON.stringify(obj)
// console.log(jsonObj);

// //  ! JSON.parse() == convert JSON obj into normal format
// let newObj = JSON.parse(jsonObj)
// console.log(newObj);



// //  ! setTimeout() : execute once
// console.log('Hello students....');

// setTimeout(()=>{
//     console.log('Hope you are good...');
// },6000)   // 6000 = 6 seconds ..... can convert to minutes , hours  

// console.log('How are you...');


// //  ! setInterval() :  execute multiple times
// console.log('Hello students....');

// setInterval(()=>{
//     console.log('Hope you are good...');
// },6000)   // 6000 = 6 seconds ..... can convert to minutes , hours  

// console.log('How are you...');












//  ! promise : it is an object in JS, which is the powerful way to work with asynchronous code
//  states of promise are : 1)succesfully completed - resolved
                            // 2)not completed - rejected
                            // 3)initial state - pending

// // ! syntax
// let myPromise = new Promise((res,rej)=>{
//     let mock = true;
//     // if(mock){
//     //     res('You can continue attending the sessions')
//     // }else{
//     //     rej('First complete the mock')
//     // }
// })
// console.log(myPromise);


// let myPromise = new Promise((res,rej)=>{
//     let mock = true;
//     if(mock){
//         res('You can continue attending the sessions')
//     }else{
//         rej('First complete the mock')
//     }
// })
// console.log(myPromise);



// let thPromise = new Promise((res,rej)=>{
//     let mock = true;
//     if(mock){
//         res('You can continue attending the sessions')
//     }else{
//         rej('First complete the mock')
//     }
// })

// then catch finally : HOF
// promise.then()
// promise.catch()
// promise.finally()

// thPromise.then((data)=>{console.log(data);})
// .catch((err)=>{console.error(err);})
// .finally(()=>{
//     console.log('Thank You....');
// })
// console.log(thPromise);




//  ! async and await : keywords in JS === makes PROMISE easier to write

// // a) async : makes the function to return the promise
// function demo(){
//     return "Hello"
// }
// console.log(demo());


// // b) await : makes the function to wait for the promise settlement
// // (note : use -  fake store api.com  === to get dummy website url)
// async function fetchData(){                         //produce promise in pending state by = async
//     let res = await fetch("https://fakestoreapi.com/products");   // promise settlement done by = await command --- by waiting for settlement
//     console.log(res);
//     let data = await res.json()                    // this line to get jsondata as output
//     // console.log(data);        //output in array
//     data.forEach(obj =>{               // the below cmd to display title in browser
//         console.log(obj);
//         let title = document.createElement('h1');
//         title.innerHTML = obj.title

//         let productImage = document.createElement('img');
//         productImage.src = obj.image

//         let category = document.createElement('h2')
//         category.innerHTML = obj.category

//         document.body.append(title,productImage,category)
// });
// }
// fetchData()

// let obj = {
//     title : "jhgjsvjvxvjwybxwjbiu"
// }




//  ! WEB STORAGE

// //  a) local storage - stores or add data permanently in local storage
// // setItem(key,value) : add data to local storage
// localStorage.setItem('name','Neha');
// localStorage.setItem('std','12');
// localStorage.setItem('address','chennai');

// // getItem() : get data from storage
// console.log(localStorage.getItem('std'));
// console.log(localStorage.getItem('address'));

// // //  removeItem() : delete particular key value pairs
// // localStorage.removeItem('std');

// // //  clear() : clear all data in local storage
// // localStorage.clear();


//  b) session storage - temporaryly stores or add data in session storage
// setItem(key,value) : add data to session storage
sessionStorage.setItem('peru','Ram');
sessionStorage.setItem('age','23');
sessionStorage.setItem('city','madurai');
sessionStorage.setItem('peru','Dinesh'); // if key same then new value replace old value stored in key

// getItem() : get data from storage
console.log(sessionStorage.getItem('age'));
console.log(sessionStorage.getItem('city'));

// //  removeItem() : delete particular key value pairs
// sessionStorage.removeItem('age');

// //  clear() : clear all data in local storage
// sessionStorage.clear();






















