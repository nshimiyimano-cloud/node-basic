//const helper=require('./helper');
//to destructure our sum from helper modure
const {sum}=require("./helper");


//console.log('process',process);
//work with functions


 //const total=helper.sum(20,40); do like this if you not destructured your sum
 const total=sum(20,40); 
console.log('total'+total);

//to create simple server with node module

const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('hello my simple node   server on port 4000!')
});

server.listen(4000);
