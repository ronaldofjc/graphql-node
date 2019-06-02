const { users, nextId } = require("../data/db");

function userIndex(filter) {
  if (!filter) return -1;
  const { id, email } = filter;
  if (id) {
    return users.findIndex(u => u.id === id);
  } else if (email) {
    return users.findIndex(u => u.email === email);
  }
  return -1;
}

module.exports = {
  newUser(_, { userData }) {
    const foundEmail = users.some(u => u.email === userData.email);

    if (foundEmail) {
      throw new Error("Email já cadastrado!");
    }

    const user = {
      id: nextId,
      ...userData,
      profile_id: 1,
      status: "ACTIVE"
    };
    users.push(user);
    return user;
  },
  removeUser(_, { filter }) {
    const index = userIndex(filter);

    if (index < 0) return null;

    const exclude = users[index];
    users.splice(index, 1);

    return exclude;
  },
  updateUser(_, { filter, userData }) {
    const index = userIndex(filter);

    if (index < 0) return null;

    const user = {
      ...users[index],
      ...userData
    };

    users.splice(index, 1, user);
    return user;
  }
};
