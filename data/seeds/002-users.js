exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {name: "gabe", email: "gabe@gabe.com"},
        {name: "jascha", email: "jascha@jascha.com"},
        {name: "beshu", email: "beshu@beshu.com"}
      ]);
    });
};
