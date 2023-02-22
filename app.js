import  express from "express";
import usersRouter from './src/router/usersRouter'

const app= express()
app.use(express.json())

app.get('/',(req, res)=>{
    res.status(200).send({message:'Hola'})
})
app.use(usersRouter)

app.listen(3000,()=>{
    console.log('Puesto 3000 escuchando!')
})