const jwt = require('jsonwebtoken')

// verify token
function verifyToken(req,res,next){
    // get auth header value
    const bearerHeader = req.headers['authorization']
    
    //  check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
} 
  else 
{
    //forbidden
    res.sendstatus(403)
}
}