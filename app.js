const express=require('express');
const app=express();

const morgan=require("morgan");
//bring routes


//to create our middleware

const ourOwnMiddleware=(req,res,next)=>{
    console.log("middleware applied");
    next();
}

const {getPost} =require("./routes/post")


app.use(morgan("dev"));
//call our middleware
app.use(ourOwnMiddleware);
app.get("/",getPost);





const port=4000
app.listen(port,()=>console.log(`Node js API is listening on port${port}`));