require('dotenv').config();
const express=require('express');
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');
const User = require('../models/user.js');

const router = express.Router()



router.post('/register',async (req,res)=>
{
    try
    {
        const {username,email,password,role}= req.body;

        const existinguser = await User.findOne({email});
        if(existinguser)
        {
           return res.status(400).json({message:"User already exists!"})
        }

        const hashedPassword = await bcrypt.hash(password,10) ;
        

        const newuser = new User({username , email , password:hashedPassword,role});  
        
        await newuser.save();

        res.status(201).json({message:"User created Successfully"});

    }

    catch(err)
    {
        res.status(400).json({message:err.message});
    }
})

router.post('/login',async (req,res)=>
{
    try
    { let {email,password}= req.body;

   
    const user = await User.findOne({email});

    if(!user) 
    {
        return res.status(400).json({message:"Invalid Email"});
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
    {
        return res.status(400).json({message:"Invalid Password"});
    }


  

    const payload={ id:user._id,email:user.email,role:user.role};

  
    const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:"1h"})

    res.json({token});
    }
    catch(err)
    {
         res.status(500).json({message:"Server Error!"});
    }

})
module.exports = router;  
