//wotk with filesystem


const fs=require('fs');
const fileName='target.txt';


//watch function takes2 args filename and callback function &this 
fs.watch(fileName,()=>console.log('file was changes'))  //thus watch watch any changes occur on file// never stop it is aluays waiting