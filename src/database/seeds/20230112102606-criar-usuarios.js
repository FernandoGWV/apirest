const bcryptjs = require ('bcryptjs')
'use strict';
  /** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up (queryInterface) {
    try{
 await queryInterface.bulkInsert('users',
      [{
        nome: 'Luiz',
   email:'luiz@gmail.com',
   password_hash: await bcryptjs.hash('123456',8),
   created_at: new Date(),
   updated_at: new Date()
     },
     {
        nome: 'Luiz',
   email:'luiz2@gmail.com',
   password_hash: await bcryptjs.hash('123456',8),
   created_at: new Date(),
   updated_at: new Date()
     },{
        nome: 'Luiz',
   email:'luiz3@gmail.com',
   password_hash: await bcryptjs.hash('123456',8),
   created_at: new Date(),
   updated_at: new Date()
     },
     ], {});

    }catch(e){
console.log(e)
    }

  },

  async down() {}
};
