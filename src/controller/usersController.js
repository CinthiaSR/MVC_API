import api from '../data/api'

export const getPersona=(req,res)=>{
    res.status(200).send(api)
}