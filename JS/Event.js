// //  ! click
// let input = document.querySelector('input');
// let bttn = document.querySelector('button');
// console.log(input,bttn);

// bttn.addEventListener('click',()=>{
//     document.body.style.backgroundColor = input.value;
//     input.value = ""
// })

// // mouseover
// let btn = document.querySelector('button')
// btn.addEventListener('mouseover',()=>{
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
//     btn.innerHTML = 'LIGHT'
// })

// // mouseout
// btn.addEventListene("mouseout",()=>{
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//      btn.innerHTML = 'DARK'
// })

// // mousedown
// let heart = document.getElementById("heart");
// heart.addEventListener('mousedown',()=>{
//     heart.innerHTML = '😍'
// })

// // mouseup
// heart.addEventListener('mouseup',()=>{
//     heart.innerHTML = '💘'
// })


// // contextmenu : on right click
// let qsp = document.getElementById('qsp');
// qsp.addEventListener('contextmenu',()=>{
//     qsp.innerHTML += " THE BEST IN INDIA "
//     qsp.style.color = 'orange';
//     document.body.style.backgroundColor = 'black'
// })


// // double click
// let btn = document.querySelector('button');
// btn.addEventListener('dblclick',(){                                 //dblclick = doubleclick
//     document.getElementById('demo').innerHTML = 'The Button has been Clicked'
//     btn.style.display = "none"
// })



// // keypress
// let textfield = document.querySelector('input')
// textfield.addEventListener('keypress',()=>{
//     console.log('Keypressed');
// })


// // keydown
// textfield.addEventListener('keydown',()=>{
//     console.log('Key is Pressing Continuosly');
// })


// // keyup
// textfield.addEventListener('keyup',(){
//     document.getElementById('dem').innerHTML = 'You are entering the Data '
//     console.log('Key Released');
// })


// // submit
// let form = document.forms[0];
// console.log(form);
// form.addEventListener('submit',()=>{
//     alert('Form Submitted Successfully..!')
// })


// submit(preventdefault)
let form = document.forms[0];
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    alert('Form Submitted Successfully..!')
    console.log(e);
})


// event object : event handler(function) will take a parameter ---- event  object --- info event
// preventDefault() : to prevent the default action of an event on the element --- like above it prevent submit button from sending data to server (which is its deafault function)..


//  STILL MANY EVENTS ARE THERE LEARN BY SEARCHING..........
