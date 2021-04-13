const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if(!authHeader){
        return res.status(401).json({error: 'Unauthorized, Access Denied'})
    }

    try {
        const decodedToken = jwt.verify(authHeader, process.env.JWT_SECRET);
        
        req.userId = decodedToken.user._id;

        next();
        
    } catch(error){
        res.status(401).json({error: "Access Denied"})
    }
}