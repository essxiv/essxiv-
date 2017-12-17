const Sequelize = require('sequelize');
const db = require('../config.js');

const Inquiry = db.define('inquiry', {
    firstName: Sequelize.STRING(100),
    lastName: Sequelize.STRING(100),
    email: Sequelize.STRING(100),
    description: Sequelize.TEXT
});

Inquiry.sync({ force: true })
.then(() => {
    return Inquiry.create({
        firstName: 'greg',
        lastName: 'hasenauer',
        email: 'greghasenauer@greg.com',
        description: 'here is an inquiry'
    })
})
