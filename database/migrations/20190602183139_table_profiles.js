exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("profiles", table => {
      table.increments("id").primary();
      table
        .string("name")
        .notNull()
        .unique();
      table.string("label").notNull();
    })
    .then(function() {
      return knex("profiles").insert([
        { name: "common", label: "Common" },
        { name: "admin", label: "Admin" },
        { name: "master", label: "Master" }
      ]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("profiles");
};
