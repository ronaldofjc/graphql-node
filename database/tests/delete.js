const db = require("../config/db");

db("users")
  .where({ id: 1 })
  .delete()
  .then(res => console.log(res))
  .finally(() => db.destroy());
