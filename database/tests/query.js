const db = require("../config/db");

/*db("profiles")
  .select("name", "id")
  .then(res => console.log(res))
  .finally(() => db.destroy());*/

db.select("id", "name")
  .from("profiles")
  .then(res => console.log(res))
  .finally(() => db.destroy());
