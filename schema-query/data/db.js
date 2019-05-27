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
    profile_id: 1,
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Rebecca",
    email: "rebecca@hotmail.com",
    age: 30,
    profile_id: 2,
    status: "INACTIVE"
  },
  {
    id: 3,
    name: "Ana",
    email: "ana@hotmail.com",
    age: 40,
    profile_id: 1,
    status: "BLOCKED"
  }
];

module.exports = { profiles, users };
