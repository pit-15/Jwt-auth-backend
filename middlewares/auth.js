const jwt = require('jsonwebtoken');

function auth (req,res,next)
{
    const authorizationheaderValue =req.headers.authorization 
    if (!authorizationheaderValue) {
        return res.status(401).json({ message: "Missing Authorization header" });
    }

    const [scheme,token] = authorizationheaderValue.split(" ")

    if(scheme !=="Bearer" || !token)
    {
        return res.status(401).json("Missing OR Invlaid Authorization Head")

    }

    try
    {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);  
        req.user = {id:decoded.id,email:decoded.email};
        next();
      
    }
    catch(err)
    {

        if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Access token expired' });
        }
        return res.status(401).json({ message: 'Invalid token' });

    }
}

module.exports= auth;


