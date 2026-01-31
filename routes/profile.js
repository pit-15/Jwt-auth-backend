const express= require('express');
const auth = require('../middlewares/auth');
const  User = require("../models/user");

const router = express.Router();

router.get("/me",auth,async (req,res,next)=>  
{
    try
    {
        const user = await User.findById(req.user.id).select('-password'); 
        
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        else
        {
            res.json({user});
        }

    }
    catch(err)
    {
    res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;  
