const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

<<<<<<< HEAD
const sequelize = new Sequelize (
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
=======
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")

  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
>>>>>>> 76469648f2680bb426e4a0b261136eb9b29f0d95
