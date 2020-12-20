 const { Sequelize, DataTypes } = require('sequelize'); // importar siquilize
 const UserModel = require('./users');
 const FilmModel = require('./films');

 // conectar con la base de datos
const sequelize = new Sequelize('LtNLo6xnKr', 'LtNLo6xnKr', 'euUm34yUpP', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
  });

const User = UserModel(sequelize, Sequelize);
const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(()=> {
        console.log('Tablas sincronizadas')
    });

    module.exports= {
        User,
        Film
    }