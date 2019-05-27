const { users, nextId } = require("../data/db");

module.exports = {
  newUser(_, { name, email, age }) {
    const user = {
      id: nextId,
      name,
      email,
      age,
      profile_id: 1,
      status: "ACTIVE"
    };
    users.push(user);
    return user;
  }
};
