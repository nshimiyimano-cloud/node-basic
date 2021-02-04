const fs=require("fs");

const fileName="target.txt";




//APPLY FUNCTIONAL APPROACH IN THIS operation to read file

//for error handler

const errorHandler=(err)=>{
    console.log(err);
}


//for data handler

const dataHandler=(data)=>{
    console.log(data.toString());
}


fs.readFile(fileName,(err,data)=>{
    if(err) errorHandler(err)
    else{
        console.log(dataHandler(data)) ; //by default this data is buffer as many numbers we need to change into string by using toString()
    }
})

console.log('asynchroneous programming... this text displayed before above because we use async');
 


