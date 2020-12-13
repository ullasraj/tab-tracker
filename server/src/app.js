const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.json())
app.get('/index',(req,res)=>{
    res.send("hello index");
})
app.listen(8080, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port"); 
})