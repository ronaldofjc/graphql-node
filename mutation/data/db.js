const profiles = [{ id: 1, nome: "normal" }, { id: 2, nome: "admin" }];

const users = [
  {
    id: 1,
    name: "João Silva",
    email: "jsilva@zemail.com",
    age: 29,
    profile_id: 1,
    status: "ATIVO"
  },
  {
    id: 2,
    name: "Rafael Junior",
    email: "rafajun@wemail.com",
    age: 31,
    profile_id: 2,
    status: "INATIVO"
  },
  {
    id: 3,
    name: "Daniela Smith",
    email: "danismi@umail.com",
    age: 24,
    profile_id: 1,
    status: "BLOQUEADO"
  }
];

module.exports = { users, profiles };
