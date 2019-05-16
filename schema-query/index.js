const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  # api entry points
  type Query {
    hello: String
    dateNow: Date
    loggedUser: User
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "Hello World";
    },
    dateNow() {
      return new Date();
    },
    loggedUser() {
      return {
        id: 1,
        name: "Ronaldo",
        email: "ronaldofjc@hotmail.com",
        age: 23,
        salary: 20.0,
        vip: true
      };
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
