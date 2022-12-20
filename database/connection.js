
import { Sequelize, Model, DataTypes } from 'sequelize';
const username = "postgres";
const password = "babou/63";
// Option 1: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
const sequelize = new Sequelize("test", username, password, {
  host: '192.168.1.59',
  port: '6060',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});
export default User

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

  // const User = sequelize.define('User', {
  //   // Model attributes are defined here
  //   firstName: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   lastName: {
  //     type: DataTypes.STRING
  //     // allowNull defaults to true
  //   }
  // }, {
  //   // Other model options go here
  // });
  
  // // `sequelize.define` also returns the model
  // console.log(User === sequelize.models.User); // true

  