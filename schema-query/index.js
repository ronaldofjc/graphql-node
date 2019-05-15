const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # api entry points
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "Hello World";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Running in port ${url}`);
});
