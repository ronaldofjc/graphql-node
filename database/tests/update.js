const db = require("../config/db");

const newUser = {
  name: "Pedro",
  email: "pedro@empresa.com.br",
  password: "123456"
};

async function exercise() {
  const { qty } = await db("users")
    .count("* as quantity")
    .first();

  if (qty === 0) {
    await db("users").insert(newUser);
  }

  let { id } = await db("users")
    .select("id")
    .first();

  await db("users")
    .where({ id })
    .update({ name: "Pedro Garcia", email: "pedro.garcia@empresa.com.br" });

  return db("users").where({ id });
}

exercise()
  .then(user => console.log(user))
  .finally(() => db.destroy());
