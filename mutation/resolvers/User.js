const { profiles } = require("../data/db");

module.exports = {
  profile(user) {
    const sels = profiles.filter(p => p.id === user.profile_id);
    return sels ? sels[0] : null;
  }
};
