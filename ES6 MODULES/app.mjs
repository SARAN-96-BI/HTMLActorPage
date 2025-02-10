// ! this is main js file --- import the code

//  import the code --- 2 ways
//  ! 1.named import --- we can import multiset codes
//  always import statements should be in the first line
//  syntax : import { var_name1, var_name2....... }from 'path of the external file
//  ! while named import variable name should be same as the variable name which we used while exporting
//  ! "path of external file" consists of the extension ".js" while importing

import {emp1,emp2} from './app1.js';
import {demo,arr} from "./app2.js";

console.log(emp1);
console.log(emp2);

demo('sam');
console.log(arr);

console.log(dev1); 
console.log(emp);  //{ename: 'Saran', esal: 35000, address: 'kar'} 
let {address,esal,ename} = emp; 
 
// ! 2.default import 
// import default var_name from "path_of_external_file" 
import emp from "./app1.js" 
console.log(emp); 
 
import demo from "./app2.js" 
import std from "./app1.js" 
 
console.log(std); 
console.log(demo());

 
