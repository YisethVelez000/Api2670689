const{Shema, model}= require('mongoose')

const UsuarioShema=({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre de usuario es requerido']

    },

    password:{
        type:String,
        required:[true, 'El password debe contener minimo 4 caracteres'],
        min:[4, 'El password debe contener minimo 4 caracteres'],
        max:[10, 'El password debe contener maximo 1o caracteres']
    },
    rol:{
        type:String,
        required:[true, 'El rol es requerido'],
        enum:['Admin','Usuario'],
    },
    estado:{
        type:Boolean,
        default:true,
        required:true
    }


})
//expesificando la estructura que va  a tener la conexion
module.exports = model('Usuario', UsuarioShema)