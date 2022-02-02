import User from '../models/User'

class UserController {

  // Index
  async index(req,res) {
    try{
      const users = await User.findAll({attributes: ['id', 'nome', 'email']});
      return res.json(users)

    } catch (e){
      return res.json(null);
    }
  }
  // Show
  async show(req,res) {
    try{

      const user = await User.findByPk(req.params.id);

      const {id,nome,email} = user;


      return res.json({id,nome,email})

    } catch (e){
      return res.json(null);
    }
  }
  // update
  async update(req,res) {
    try {

      const user = await User.findByPk(req.userId)
      if (!user) {
        errors: ['Usuário inválido.']
      }

      const novosDados = await user.update(
        req.body
      );

      const {id,nome,email} = novosDados;

      return res.json({id,nome,email});
    } catch (e){
      // todo
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });

    }
  }

  // store
  async store(req,res) {
    console.log(req.body);
    try {

      const novoUser = await User.create(
        req.body
      );
      const {id,nome,email} = novoUser;

      return res.json({id,nome,email});

    } catch (e){
      // todo
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });

    }
  }

// ----------------

  async delete(req,res) {
    try {
      const user = await User.findByPk(req.userId)


      if (!user) {
        errors: ['Usuário inválido.']
      }

      user.destroy()
      return res.json({"sucesso":"Usuario deletedo com sucesso!"});
    } catch (e){
      // todo
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });

    }
  }


// ----------------
}

/*
Metodos de Usuario
index -> lista todos os usuarios -> GET
store ou create -> Cria um novo usuário -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuario -> PATH ou PUT


*/

export default new UserController();
