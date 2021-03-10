const userResolver = {
  Query: {
    users: async (_, args) => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById();
    },
  },
  Mutation: {
    signUp: async (_, args) => {
      return await User.find();
    },
    login: async (_, { id }) => {
      return await User.findById();
    },
    updateUser: async (_) => {},
    deleteUser: async (_) => {},
  },
};

module.exports = userResolver;
