const { users, profiles } = require("../data/db");

module.exports = {
  hello() {
    return "Hello World";
  },
  dateNow() {
    return new Date();
  },
  loggedUser() {
    return {
      id: 1,
      name: "Ronaldo",
      email: "ronaldofjc@hotmail.com",
      age: 23,
      user_salary: 20.0,
      vip: true
    };
  },
  featuredProduct() {
    return {
      name: "Notebook",
      price: 4890.0,
      discount: 0.15
    };
  },
  numbersMegaSena() {
    return [4, 8, 12, 25, 33, 45];
  },
  users() {
    return users;
  },
  user(_, { id }) {
    const selected = users.filter(u => u.id === id);
    return selected ? selected[0] : null;
  },
  profiles() {
    return profiles;
  },
  profile(_, { id }) {
    const selected = profiles.filter(p => p.id === id);
    return selected ? selected[0] : null;
  }
};
