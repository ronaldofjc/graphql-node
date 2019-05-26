const profiles = [
  {
    id: 1,
    name: "Admin"
  },
  {
    id: 2,
    name: "Normal"
  }
];

const users = [
  {
    id: 1,
    name: "Ronaldo",
    email: "ronaldofjc@hotmail.com",
    age: 35,
    profile_id: 1
  },
  {
    id: 2,
    name: "Rebecca",
    email: "rebecca@hotmail.com",
    age: 30,
    profile_id: 2
  },
  {
    id: 3,
    name: "Ana",
    email: "ana@hotmail.com",
    age: 40,
    profile_id: 1
  }
];

module.exports = { profiles, users };
