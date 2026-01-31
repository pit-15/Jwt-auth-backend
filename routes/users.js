const express=require('express');
const auth = require('../middlewares/auth')
const authorizeroles = require('../middlewares/rolebasedaccess')

const router = express.Router();


    router.get('/admin',auth,authorizeroles("admin"),(req,res)=> 
    {
        res.json({message:"Welcome ADMIN"});
    })

    router.get('/manager',auth,authorizeroles("admin","manager"),(req,res)=> 
    {
        res.json({message:"Welcome Manager"});
    })

    router.get('/user',auth,auth,authorizeroles("admin","manager","user"),(req,res)=>  
    {
        res.json({message:'Welcome User'})
    })

module.exports = router;