const { profiles, nextId } = require("../../data/db");

function profileIndex(filter) {
  if (!filter) return -1;
  const { id, name } = filter;
  if (id) {
    return profiles.findIndex(u => u.id === id);
  } else if (name) {
    return profiles.findIndex(u => u.name === name);
  }
  return -1;
}

module.exports = {
  newProfile(_, { profileData }) {
    const foundName = profiles.some(u => u.name === profileData.name);

    if (foundName) {
      throw new Error("Perfil com este nome já cadastrado!");
    }

    const profile = {
      id: nextId,
      ...profileData
    };

    profiles.push(profile);
    return profile;
  },
  removeProfile(_, { filter }) {
    const index = profileIndex(filter);

    if (index < 0) return null;

    const exclude = profiles[index];
    profiles.splice(index, 1);

    return exclude;
  },
  updateProfile(_, { filter, profileData }) {
    const index = profileIndex(filter);

    if (index < 0) return null;

    const profile = {
      ...profiles[index],
      ...profileData
    };

    profiles.splice(index, 1, profile);
    return profile;
  }
};
