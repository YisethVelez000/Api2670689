const  {response} =require('express');
const { models } = require('mongoose');

Usuario = require('../models/usuario')

const getUsuario = async(req, res) =>{


    const usuarios = await Usuario.find();//obteniendo los datos de la coleccion
     res.json({
        msg: usuarios
     })

}
const postUsuario = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const usuario = new Usuario(datos)//instaciar el objeto
        await usuario.save()//guardar la base de datos
        console.log(usuario)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putUsuario = async(req, res) =>{

try{
        const usuario = await Usuario.findOneAndUpdate({nombre: nombre},{password:password,rol:rol, estado:estado})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
        const { nombre,password,rol,estado}=req.query //desestructurar
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteUsuario = async(req, res) =>{

    try{
            const usuario = await Usuario.findOneAndUpdate({nombre: nombre})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            const { nombre,password,rol,estado}=req.query //desestructurar
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getUsuario,postUsuario,putUsuario,deleteUsuario

}
