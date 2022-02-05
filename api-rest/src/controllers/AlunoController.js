import Aluno from "../models/Aluno";

class AlunoController {
  async index(req,res) {

    const alunos = await Aluno.findAll()
    res.json(alunos)

  }
  async store(req,res) {
    // TODO: store
    try {

      const novoAluno = await Aluno.create(
        req.body
      );
      const {id,nome,sobrenome,email,idade,peso,altura} = novoAluno;

      return res.json({id,nome,sobrenome,email,idade,peso,altura});

    } catch (e){
      // todo
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });

    }

  }

  async show(req,res) {
    // TODO: show
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['Invalid id']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if(!aluno){
        return res.status(400).json({
          errors: ['Invalid Student']
        })
      }
      return res.json(aluno);
    }catch (e){

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })

    }


  }
  async update(req,res) {
    // TODO: update
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['Invalid id']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if(!aluno){
        return res.status(400).json({
          errors: ['Invalid Student']
        })
      }
      const novosDados = await aluno.update(
        req.body
      );

      return res.json(novosDados);
    }catch (e){

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })

    }


  }
  async delete(req,res) {
    // TODO: delete
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['Invalid id']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if(!aluno){
        return res.status(400).json({
          errors: ['Invalid Student']
        })
      }
      aluno.destroy();
      return res.json(aluno);
    }catch (e){

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })

    }
  }

}

export default new AlunoController();
