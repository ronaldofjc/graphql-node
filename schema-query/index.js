const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    id: 1,
    name: "Ronaldo",
    email: "ronaldofjc@hotmail.com",
    age: 35
  },
  {
    id: 2,
    name: "Rebecca",
    email: "rebecca@hotmail.com",
    age: 30
  },
  {
    id: 1,
    name: "Ana",
    email: "ana@hotmail.com",
    age: 40
  }
];

const typeDefs = gql`
  scalar Date

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

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
    featuredProduct: Product
    numbersMegaSena: [Int!]!
    users: [User]
  }
`;

const resolvers = {
  Product: {
    priceWithDiscount(product) {
      if (product.discount) {
        return product.price * (1 - product.discount);
      } else {
        return product.price;
      }
    }
  },
  User: {
    salary(user) {
      return user.user_salary;
    }
  },
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
        user_salary: 20.0,
        vip: true
      };
    },
    featuredProduct() {
      return {
        name: "Notebook",
        price: 4890.0,
        discount: 0.15
      };
    },
    numbersMegaSena() {
      return [4, 8, 12, 25, 33, 45];
    },
    users() {
      return users;
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
