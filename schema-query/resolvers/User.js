const { profiles } = require("../data/db");

module.exports = {
  salary(user) {
    return user.user_salary;
  },
  profile(user) {
    const selected = profiles.filter(p => p.id === user.profile_id);
    return selected ? selected[0] : null;
  }
};
