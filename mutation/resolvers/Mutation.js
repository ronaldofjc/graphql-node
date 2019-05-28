const { users, nextId } = require("../data/db");

module.exports = {
  newUser(_, args) {
    const foundEmail = users.some(u => u.email === args.email);

    if (foundEmail) {
      throw new Error("Email já cadastrado!");
    }

    const user = {
      id: nextId,
      ...args,
      profile_id: 1,
      status: "ACTIVE"
    };
    users.push(user);
    return user;
  },
  removeUser(_, { id }) {
    const index = users.findIndex(u => u.id === id);

    if (index < 0) return null;

    const exclude = users[index];
    users.splice(index, 1);

    return exclude;
  },
  updateUser(_, args) {
    const index = users.findIndex(u => u.id === args.id);

    if (index < 0) return null;

    const user = {
      ...users[index],
      ...args
    };

    users.splice(index, 1, user);
    return user;
  }
};
