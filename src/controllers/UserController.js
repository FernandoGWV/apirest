import User from '../models/User'

class UserController{
async store( req,res){
  try{
    const novoUser = await User.create(req.body);
    const {id,nome,email} = novoUser
  return res.json({id,nome,email})
  } catch(e){
   return  res.status(400).json(console.log(e) /* {

       erros: e.errors.map(e => e.messages)
    } */)
  }}
//Index
async index(req,res)  {
try{
const users = await User.findAll({attributes: ['id','nome','email']})
return res.json(users)
}catch(e){
return res.json(null)
}
}


// Show


async show(req,res)  {
try{
const user = await User.findByPk(req.params.id)
const {id, nome, email} = user
return res.json({id, nome, email})
}catch(e){
return res.json(null)
}
}

// Update

async update(req,res)  {
try{

const user = await User.findByPk(req.userId)
if(!user){
  return res.status(400).json({
      errors:e.errors.map((err) => err.message)
    })
}
const novosDados = await user.update(req.body)
const {id,nome,email} = novosDados
return res.json({id,nome,email})
}catch(e){
return res.json(null)
}
}

// Delete


async delete(req,res)  {
try{


if(!req.params.id){
  return res.status(400).json({
    errors:['ID não enviado.']
  })
}
const user = await User.findByPk(req.params.id)
if(!user){
  return res.status(400).json({
      errors:e.errors.map((err) => err.message)
    })
}
 await user.destroy()
return res.json(null)
}catch(e){
return res.json(null)
}
}

}


export default new UserController()
