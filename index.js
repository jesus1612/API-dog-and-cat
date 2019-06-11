//Importar dependencias
const express = require('express')
const app = express()
const bodyParse =require('body-parser')
const catNames = require('cat-names');//Contiene un array de 100 nombres de gatos
const dogNames = require('dog-names');//Contiene un array de 100 nombres de perros

// endPoint http://localhost:3000/dog
// dogs and cats 
// http://localhost:3000/dog => { status:"sucesses",name: "fulanito"}

//Permite ingresar datos json por medio de response 
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true }))

//Obtiene la ruta de los perros y genera un nombre aleatorio
app.get('/dog', (req,res) => res.json({
    status:"sucesses",
    animal:{
        isAdog:true,
        dogName:`${dogNames.female[Math.floor(Math.random() * dogNames.female.length)]}`,
    }
}))

//obtiene la ruta de los gatos y genera un nombre aleatorio
app.get('/cat', (req,res) => res.json({
    status:"sucesses",
    animal:{
        isACat:true,
        catName:`${catNames.all[Math.floor(Math.random() * catNames.all.length)]}`,
    }
}))

//Ejemplo de peticion post
// app.post('/user',(req,res)=>{
//     const {firstName, lastName}=req.body

//     res.status(200).send("hola"+ firstName+ " "+lastName)
// })

//genera un escuchador del servidor en el puerto 3000
app.listen(3000)