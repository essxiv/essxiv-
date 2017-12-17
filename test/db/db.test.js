const assert = require('assert');
const chai = require('chai');
const Sequelize = require('sequelize');
const blueBird = require('bluebird');

describe('Database', () => {
    const sequelize = new Sequelize('dev_essxiv', 'dev', 'devpassword', {
        operatorsAliases: false,
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    const testModel = sequelize.define('testTable', {
        name: Sequelize.STRING(100),
        email: Sequelize.STRING(100),
        description: Sequelize.TEXT
    });

    describe('Connection', () => {
        it('should connection correctly', () => {
            return new Promise((resolve, reject) => {
                return sequelize.authenticate()
                .then((result) => {
                    console.log(result);
                    console.log('Connection has been established successfully.');
                    resolve();
                })
                .catch((err) => {
                    console.error('Unable to connect to the database:', err);
                    reject();
                });
            })
        });
    });

    describe('Insert Into Tables', () => {
        it('should insert 1 record into user table', () => {
            new Promise((resolve, reject) => {
                return testModel.create({
                    name: 'greg',
                    email: 'greg@gmail.com',
                    description: 'this is a hello from mochi and chai!'
                })
                .then((result) => {
                    console.log(result);
                    resolve();
                })
                .catch((err) => {
                    console.log(err)
                })
            });
        });
    });

    describe('Find All Records', () => {
        it('should insert 1 record into user table', () => {
            new Promise(function(resolve, reject) {
                return testModel.findAll()
                .then((result) => {
                    console.log('result: ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log(err)
                })
            });
        });
    });
});
