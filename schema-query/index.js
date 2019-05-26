const { ApolloServer, gql } = require("apollo-server");

const profiles = [
  {
    id: 1,
    name: "Admin"
  },
  {
    id: 2,
    name: "Normal"
  }
];
const users = [
  {
    id: 1,
    name: "Ronaldo",
    email: "ronaldofjc@hotmail.com",
    age: 35,
    profile_id: 1
  },
  {
    id: 2,
    name: "Rebecca",
    email: "rebecca@hotmail.com",
    age: 30,
    profile_id: 2
  },
  {
    id: 3,
    name: "Ana",
    email: "ana@hotmail.com",
    age: 40,
    profile_id: 1
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
    id: Int
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    profile: Profile
  }

  type Profile {
    id: Int
    name: String!
  }

  # api entry points
  type Query {
    hello: String
    dateNow: Date
    loggedUser: User
    featuredProduct: Product
    numbersMegaSena: [Int!]!
    users: [User]
    user(id: Int): User
    profiles: [Profile]
    profile(id: Int): Profile
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
    },
    profile(user) {
      const selected = profiles.filter(p => p.id === user.profile_id);
      return selected ? selected[0] : null;
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
    },
    user(_, { id }) {
      const selected = users.filter(u => u.id === id);
      return selected ? selected[0] : null;
    },
    profiles() {
      return profiles;
    },
    profile(_, { id }) {
      const selected = profiles.filter(p => p.id === id);
      return selected ? selected[0] : null;
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
