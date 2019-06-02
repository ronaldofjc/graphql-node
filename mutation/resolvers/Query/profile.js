const { profiles } = require("../../data/db");

module.exports = {
  profiles() {
    return profiles;
  },
  profile(_, { id }) {
    const sels = profiles.filter(p => p.id === id);
    return sels ? sels[0] : null;
  }
};
