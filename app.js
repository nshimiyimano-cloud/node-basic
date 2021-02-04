const fs=require("fs");

const fileName="target.txt";
fs.readFile(fileName,(err,data)=>{
    if(err){
        throw new Error('unable to read this file')
    }
    else{
        console.log(data.toString());  //by default this data is buffer as many numbers we need to change into string by using toString()
    }
})

console.log('asynchroneous programming... this text displayed before above because we use async');
 