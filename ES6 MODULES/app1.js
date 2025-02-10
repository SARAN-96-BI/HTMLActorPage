//  ! this is external file --- export the code

//  ! export the code --- 2 ways
//  ! 1. named export --- we can export multiset codes

//  ? inline export
export let emp1 = 'Sneha'
export let emp2 = 'Surya'


//  together export 
let dev1 = 'Adithya'; 
let emp = { 
    ename : 'Saran', 
    esal : 35000, 
    address : 'kar' 
} 
 
// export {var_name,var_name} 
export {dev1,emp} 
 
 
// !2.default export : we can export only set of code 
let std = 'logesh'; 
 
export default std