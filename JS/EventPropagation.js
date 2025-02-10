let gparent = document.getElementById('gparent')
let parent = document.getElementById('parent')
let child = document.getElementById('child')

// child.addEventListener('click',()=>{
//     child.style.backgroundColor ='red'
//     console.log('Child Clicked');
// })     //EVENTHOUGH NOT WRITTEN = false is default for eventpropagation - FALSE gives BUBBLING PHASE

// parent.addEventListener('click',()=>{
//     parent.style.backgroundColor ='green'
//     console.log('Parent Clicked');
// })      

// gparent.addEventListener('click',()=>{
//     gparent.style.backgroundColor ='yellow'
//     console.log('gparent Clicked');
// })

// //  here event travel from [ child (to) parent (to) gparent ] = Bubbling Phase(TARGET to ROOT)


// child.addEventListener('click',()=>{
//     child.style.backgroundColor ='red'
//     console.log('Child Clicked');
// },true)                // TRUE gives CAPTURING PHASE

// parent.addEventListener('click',()=>{
//     parent.style.backgroundColor ='green'
//     console.log('Parent Clicked');
// },true)      

// gparent.addEventListener('click',()=>{
//     gparent.style.backgroundColor ='yellow'
//     console.log('gparent Clicked');
// },true)

// //  here event travel from [ gparent (to) parent (to) child ] = Capturing Phase( ROOT to TARGET)


//     event.stopPropagation()
child.addEventListener('click',()=>{
    child.style.backgroundColor ='red'
    console.log('Child Clicked');
    event.stopPropagation()
})     //EVENTHOUGH NOT WRITTEN = false is default for eventpropagation - FALSE gives BUBBLING PHASE

parent.addEventListener('click',()=>{
    parent.style.backgroundColor ='green'
    console.log('Parent Clicked');
    // event.stopPropagation()
})      

gparent.addEventListener('click',()=>{
    gparent.style.backgroundColor ='yellow'
    console.log('gparent Clicked');
}) //    event.stopPropagation() =  works different in bubbling and capturing --so practice with the command in each case