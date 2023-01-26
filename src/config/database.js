require('dotenv').config()

module.exports = {
 dialect: 'mariadb',
 port:process.env.DATABASE_PORT,
 host:process.env.DATABASE_HOST,
 username:process.env.DATABASE_USERNAME,
 password:process.env.DATABASE_PASSWORD,
 database:process.env.DATABASE,
 define:{
  timestamps:true,
  underscored: true,
  underscoredAll: true,
  "createAt": 'create_at',
  'updateAt': 'update-at'
 },
 dialectOptions:{
timezone: "America/Sao_Paulo"
 },
 timezone: "America/Sao_Paulo",
};
