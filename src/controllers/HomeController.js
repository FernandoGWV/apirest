import Aluno from '../models/Aluno'

class HomeController{
async index( req,res){
  const novoAluno = await Aluno.create({
    nome: 'Luiz',
    sobrenome: 'Fernando',
    email: 'luiz@gmail.com',
    idade: 152,
    peso: 222,
    altura: 2.2,
  });
  res.json(novoAluno)
}
}


export default new HomeController()
