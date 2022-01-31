import User from '../models/User'

class UserController {

  // Index
  async index(req,res) {
    try{
      const users = await User.findAll();
      return res.json(users)

    } catch (e){
      return res.json(null);
    }
  }
  // Show
  async show(req,res) {
    try{
      const {id} = req.params ;

      const user = await User.findByPk(id);
      return res.json(user)

    } catch (e){
      return res.json(null);
    }
  }
  // update
  async update(req,res) {    
    try {
      const {id} = req.params ;
      
      if (!id){
        return res.status(400).json({
          errors: ['ID inválido.']
        });      
      }
      const user = await User.findByPk(id);
      if (!user) {
        errors: ['Usuário inválido.']
      }

      const novosDados = await user.update(
        req.body        
      );
      return res.json(novosDados);
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
      return res.json(novoUser);
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
      const {id} = req.params ;
      
      if (!id){
        return res.status(400).json({
          errors: ['ID inválido.']
        });      
      }
      const user = await User.findByPk(id);
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
