import Sequelize, { Model } from "sequelize";

import appConfig from "../config/appConfig";

export default class Foto extends Model {
  static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          notEmpty: {
            msg: 'Nome do arquivo precisa ter entre 3 e 255 caracteres',
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          notEmpty: {
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }

      }

    },{
      sequelize,
    })
    return this;
  }
  static associate(models){
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'});

  }
}
