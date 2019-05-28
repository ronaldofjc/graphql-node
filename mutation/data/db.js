const profiles = [{ id: 1, name: "normal" }, { id: 2, name: "admin" }];

let id = 1;
function nextId() {
  return id++;
}

const users = [
  {
    id: 1,
    name: "João Silva",
    email: "jsilva@zemail.com",
    age: 29,
    profile_id: 1,
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Rafael Junior",
    email: "rafajun@wemail.com",
    age: 31,
    profile_id: 2,
    status: "INACTIVE"
  },
  {
    id: 3,
    name: "Daniela Smith",
    email: "danismi@umail.com",
    age: 24,
    profile_id: 1,
    status: "BLOCKED"
  }
];

module.exports = { users, profiles, nextId };
