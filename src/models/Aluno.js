import Sequelize, { Model } from "sequelize";

export default class Alunos extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: ["3", "55"],
              msg: "Nome precisa ter entre 3 a 55 caracteres.",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: ["3", "55"],
              msg: "Sobrenome precisa ter entre 3 a 55 caracteres.",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email ja existe",
          },
          validate: {
            isEmail: {
              msg: "Email invalido.",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: "Idade precisa ser um numero inteiro.",
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: "Peso precisa ser um numero inteiro ou de ponto flutuante",
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat:
              "Altura precisa ser um numero inteiro ou de ponto flutuante",
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
