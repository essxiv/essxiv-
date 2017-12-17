const Sequelize = require('sequelize');

var db = new Sequelize('dev_essxiv', 'dev', 'devpassword', {
    operatorsAliases: false,
    host: 'localhost',
    dialect: 'mysql',
    // dialect: 'mysql'
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // SQLite only
    // storage: './database.sqlite'
});

module.exports = db;
// const Project = sequelize.define('project', {
//     title: Sequelize.STRING(255),
//     description: Sequelize.TEXT
// });
//
// Project.sync({ force: true })
// .then(function () {
//     return Project.create({
//         title: 'A Guide To Universal Peace',
//         description: 'This is the book that describes what/how it takes to achieve peace throughout a whole universe.'
//     });
// });


// sequelize
// .authenticate()
// .then((result) => {
//     console.log('Connection has been established successfully.');
// })
// .catch(err => {
//     console.error('Unable to connect to the database:', err);
// });

// console.log(Object.keys(sequelize));

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
