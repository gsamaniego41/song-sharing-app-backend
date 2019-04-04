const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      name: "gabe",
      email: "gabe@gabe.com",
      password: bcrypt.hashSync("somepassword", 12)
    },
    {
      name: "jascha",
      email: "jascha@jascha.com",
      password: bcrypt.hashSync("somepassword", 12)
    },
    {
      name: "beshu",
      email: "beshu@beshu.com",
      password: bcrypt.hashSync("somepassword", 12)
    }
  ]);
};
