const Sequelize = require('sequelize');
const db = require('../util/database');

const Posts = db.define('posts', {
    Caption: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    media: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    altText: {
        type: Sequelize.STRING,
    },
});

module.exports = Posts