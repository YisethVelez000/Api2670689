const {router, Router}=require('express')

const route = Router()


const {getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/Usuario')//importando el controlador

   //listar todos los datos
/*    route.get('/',(req, res)=>{
        res.json({
            msg:'GET'
        })
 
    })
    */
 //consultar dato
    route.get('/', getUsuario) 
      

    route.post('/', postUsuario)  

    route.put('/', putUsuario)  

    route.delete('/', deleteUsuario)  






    route.post('/',(req, res) =>{
        const {documento,nombre,apellidos}=req.query
        aprendices.push({
            "documento":documento,
            "nombre":nombre,
            "apellidos":apellidos
        })
        res.json({
            msg:aprendices
        })

    })//insertar datos
  
    route.delete('/',(req, res) =>{
        //implementa la logica


  
    res.json({
        msg:'eliminacion exitosa'
    })
   })
   module.exports = route


