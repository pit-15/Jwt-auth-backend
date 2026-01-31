const authorizeroles = (...allowedroles)=> 
{
    return (req,res,next)=>
    {
        if(!allowedroles.includes(req.user.role))
        {
            return res.status(403).json("Acess Denied");
        }
        next();
    }
}

module.exports=authorizeroles;