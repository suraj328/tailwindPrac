const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use('/static',express.static('static'));

app.get('/',(req,res)=>{
    res.render('index',{});
});
app.get('/:userQuery',(req,res)=>{
    console.log(req.params.userQuery)
    // res.render('index',{data:{userQuery:req.params.userQuery}});
    res.render('index',{data:{user:req.params.userQuery,search:['express','java','php','ajax']}});
});
app.listen(3000,()=>{
    console.log(`running on port http://localhost:3000/`);
});