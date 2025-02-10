// ! let std = [1, 'Advitha', "advitha@gmail.com", "9899898989"]
//email & contact ---- generte password = advi8989
let std = [1, 'Advitha', "advitha@gmail.com", "9899898989"];
let mail = std[2].split('').slice(0,4)//from mail id we get 0 to 4 = advi
let contact = std[3].split('').slice(6)//0r we can write (6,10)
let password = mail.concat(contact).join('')
console.log(password);
console.log(contact);
console.log(mail);

