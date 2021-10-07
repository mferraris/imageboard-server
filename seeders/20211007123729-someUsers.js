"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Joe",
          email: "joseph@email.com",
          password: bcrypt.hashSync("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Miguel",
          email: "miguel@email.com",
          password: bcrypt.hashSync("password2", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Maria",
          email: "maria@email.com",
          password: bcrypt.hashSync("password3", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
