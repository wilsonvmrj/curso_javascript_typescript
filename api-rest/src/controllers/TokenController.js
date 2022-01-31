import User from '../models/User'

class TokenController {
  async store(req,res) {
    const {email="", password=""} = req.body;

    if (!email || !password ){
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      })
    }

    const user = await User.findOne({where: {email}});

    if (!user){
      return res.status(401).json({
        errors: ['Usuario não existe.'],
      })
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['senha inválida'],
      })
    }

    res.json(user);
  }
}

export default new TokenController();
