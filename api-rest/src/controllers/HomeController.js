import Aluno from '../models/Aluno'

class HomeController {
  async index(req,res) {
    const novoAluno = await Aluno.create({nome:"Michele",sobrenome:"Magalhaes",email:"mimisouza.magalhaes@gmail.com",idade: 20,peso: 55, altura: 1.5});

    res.json(novoAluno);
  }
}

export default new HomeController();
