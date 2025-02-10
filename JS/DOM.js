// DOM - Document Object Model
console.log(document);

//  ! Direct Access
console.log(document.baseURI);
console.log(document.body);
console.log(document.title);
console.log(document.head);


// console.log(document.images);
// document.images[0].style.border = "10px solid red"
// document.images[1].style.border = "10px solid blue"
// document.images[2].style.height = "10px solid green"



// console.log(document.links);
// document.link[0].style.border = "10px solid red"
// document.link[3].style.padding = "10px 20px"

// document.link[1].style.border = "10px solid green"
// document.link[3].style.padding = "10px 20px"

// document.link[2].style.border = "10px solid yellow"
// document.link[3].style.padding = "10px 20px"

// document.link[3].style.border = "10px solid Pink"
// document.link[3].style.padding = "10px 20px"


console.log(document.forms);
console.log(document.forms[0]);



//  ! DOM TARGETTING METHODS
//  a) getElementById(id) : target element with unique id
// targets 1st element with id if multiple element share same id
let headings = document.getElementById('heading');
console.log(headings);


//  ! getElementsByClassName(classname) : target multiple elements ---- returns html collection (Array like object)
let btns = document.getElementsByClassName('btn')
console.log(btns); // HTML collection


// //  ! to  convert HTML collection ------>  Array.from(htmlcollection)
// let arr = Array.from(btns)
// console.log(arr);
// for(let btn of arr){
//     //console.log(btn);
//     btn.style.backgroungColor = 'red'
//     btn.style.padding = "10px 20px"
// }


//  ! getElementsByTagName(tagname) : target all elements of specified tagname
// returns HTML collection
let asides = document.getElementsByTagName('aside')
console.log(asides); // html collection

let arr1 = Array.from(asides)
console.log(arr1);
for(let a of arr1){
    a.style.color = 'blue'
}


//  ! querySelector : target the element based on css selector and returns single element
let h2 = document.querySelector("#hello")
console.log(h2);


//  ! querySelectorAll() : targets multiple elements based on the css selector and returns nodelist(array like objects)
let greets = document.querySelectorAll("container b")
console.log(greets);

greets.forEach((val) => {
    val.style.display = "block"
    val.style.backgroundColor = "yellow"
})






















