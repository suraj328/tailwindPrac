const express = require('express');
const router = express.Router();
const  path = require('path');

const blogs = require('../data/blogs');

router.get('/',(req,res)=>{
   
   res.render('../views/layout/home.handlebars');
    // res.sendFile(path.join(__dirname,'../views/index.html'));
});
router.get('/blog',(req,res)=>{

    blogs.blogs.forEach(e => {
        console.log(e.title);
    });
    res.sendFile(path.join(__dirname,'../views/blog.html'));
});
router.get('/blog',(req,res)=>{

    blogs.blogs.forEach(e => {
        console.log(e.title);
    });
    res.sendFile(path.join(__dirname,'../views/blog.html'));
});
router.get('/blogpost/:slug ',(req,res)=>{

    myBlog = blogs.blogs.filter((e)=>{
        return e.slug==req.params.slug;
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../views/blogpost.html'));
});

module.exports = router;