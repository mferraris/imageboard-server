"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          title: "mighty mountains",
          url: "http://images2.fanpop.com/image/photos/9800000/Great-Mountains-mountains-and-waterfalls-9842020-1920-1440.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "happy little trees",
          url: "https://www.thetreecenter.com/c/uploads/evergreen-tre.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "wondrous clouds",
          url: "https://images8.alphacoders.com/805/thumb-1920-805636.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
