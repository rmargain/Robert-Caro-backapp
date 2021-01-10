const express = require('express');
const router = express.Router();
//import las cosas importantes
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {clearRes} = require('../utils/auth')

/*POST Signup */
router.post('/signup', (req, res, next) => {
  //trabajare todo mi codigo aqui 
  const {name, lastname, phone, mobile, email, password, confirmPassword} = req.body;
 
  if(password !== confirmPassword) return  res.status(403).json({msg:"Las contraseñas deben de ser iguales"})

  bcrypt.hash(password,10).then((hashedPassword)=>{

    const  user = {name, lastname, phone, mobile,  email, password:hashedPassword};

    User.create(user).then(()=>{
      res.status(200).json({msg:"Usuario creado con éxito"});
    }).catch((error)=>{
      res.status(400).json({msg:"Ocurrió un error al momento de crear el usuario",error});
    })

  })

});

/*POST login */
router.post('/login', (req, res, next) => { 
  const {email,password} = req.body;
  User.findOne({email})
      .then((user)=>{

          if(user === null ) return res.status(404).json({msg:"No existe un usuario registrado con este email"})
          
          bcrypt.compare(password, user.password).then((match)=>{

            if(match){
              //borramos password para el usuario de esta forma 
                  //const withoutPass = user.toObject();
                  //delete withoutPass.password

                  //utilizando utils clearRes
                  const newUser = clearRes(user.toObject())


                //esto nos genera un token mezclando un valor (id) mas la palabra secreta y tiene una duracion de un dia!!!
                const  token = jwt.sign({id: user._id}, process.env.SECRET, {
                  expiresIn:"1d"
                })

                res.cookie("token", token, {
                  expires:new Date(Date.now + 86400000),
                  secure:true,
                  httpOnly:true,
                  sameSite:'none'
                }).json({user:newUser,code:200}) //newUser utilizando utils clearRes... si no sería withoutPass (user:withoutPass)
            }else{
              return res.status(401).json({msg:"La contraseña ingresada es incorrecta"})
            }

          })

      }).catch((error)=>{
        res.status(400).json({msg:"hubo un error",error});
      })
});

router.post("/logout",(req,res)=>{
  res.clearCookie("token").json({msg:"vuelve pronto"})
})




module.exports = router;
