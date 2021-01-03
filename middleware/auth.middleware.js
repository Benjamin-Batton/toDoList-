const jwt = require('jsonwebtoken');
const config = require('config')

module.exports = async (req,res,next)=>{
   if(req.method === "OPTIONS"){
       next()
   };
   try {
      const token = req.header.authenticated.split(' ')[1];
      if(!token){
        res.status('400').json({message:"Вы не авторизовались"});
      }
     let decoding = jwt.decode(token,config.get(jwtsecretKey));
     req.user = decoding;
     next()
   } catch (error) {
       res.status("401").json({message:"Вы не авторизовались"});
   }
}